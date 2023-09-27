const fs = require("fs");
const child = require("child_process");

const instanceStatsFile = "src/shared/instance_stats.js";

// crawl instance stats
try {
  // Run Rust crawler with given params. Then pipe output directly into jq, to filter
  // out fields with lots of data which we dont need. This is necessary because otherwise
  // Javascript may crash when loading the crawl output.
  const run = child.spawn(
    "cargo",
    ["run", "--", "--start-instances", "programming.dev", "--json"],
    {
      cwd: "lemmy-stats-crawler",
    }
  );
  let savedOutput = "";

  run.stdout.on("data", (data) => {
    const strData = data.toString();
    process.stdout.write(strData);
    savedOutput += strData;
  });

  run.stderr.on("data", (data) => {
    const strData = data.toString();
    process.stdout.write(strData);
  });

  run.on("close", (exitCode) => {
    var stats = JSON.parse(savedOutput);

    stats.instance_details = stats.instance_details.map((instance) => {
      return {
        domain: instance.domain,
        node_info: instance.node_info,
        site_info: {
          site_view: instance.site_info.site_view,
          admins: instance.site_info.admins,
          version: instance.site_info.version,
        },
      };
    });

    let data = `export const instance_stats = \n `;
    data += JSON.stringify(stats, null, 2) + ";";
    console.log(data);
    fs.writeFileSync(instanceStatsFile, data);
  });
} catch (err) {
  console.error(err);
}
