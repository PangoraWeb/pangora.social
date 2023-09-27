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
    [
      "run",
      "--",
      "--start-instances",
      "programming.dev, lemmy.world, lemm.ee",
      "--json",
    ],
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
        node_info: {
          software: instance.node_info.software,
          openRegistrations: instance.node_info.openRegistrations,
        },
        site_info: {
          site_view: {
            site: {
              name: instance.site_info.site_view.site.name,
              icon: instance.site_info.site_view.site.icon,
              description: instance.site_info.site_view.site.description,
              actor_id: instance.site_info.site_view.site.actor_id,
            },
            counts: {
              users: instance.site_info.site_view.counts.users,
              communities: instance.site_info.site_view.counts.communities,
            },
          },
          admins: instance.site_info.admins.map((admin) => {
            return {
              person: {
                name: admin.person.name,
                display_name: admin.person.display_name,
                avatar: admin.person.avatar,
                bio: admin.person.bio,
                bot_account: admin.person.bot_account,
              },
            };
          }),
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
