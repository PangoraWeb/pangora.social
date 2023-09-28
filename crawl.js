const fs = require("fs");
const child = require("child_process");
const http = require("lemmy-js-client");
const https = require("https");

const instanceStatsFile = "src/shared/instance_stats.js";

const data = fs.readFileSync("src/data/whitelist.txt");

const string = data.toString();
const lines = string.split("\n");

const calls = [];

for (let i = 0; i < lines.length; ++i) {
  const line = lines[i];
  const splitLine = line.split(":").map((split) => split.trim());

  const client = new http.LemmyHttp("https://" + splitLine[0]);
  calls.push(
    (async () => {
      let site;
      let site2;

      try {
        site = await client.getSite({});
        site2 = await getSiteData(splitLine[0]);
      } catch (e) {
        return null;
      }

      console.log(`${site.site_view.site.name} Loaded`);
      return {
        version: site.version,
        observer: site2.data.node[0],
        site_view: {
          site: {
            name: site.site_view.site.name,
            icon: site.site_view.site.icon,
            description: site.site_view.site.description,
            actor_id: site.site_view.site.actor_id,
          },
          counts: {
            users: site.site_view.counts.users,
            communities: site.site_view.counts.communities,
          },
        },
        admins: site.admins.map((admin) => {
          return {
            person: {
              id: admin.person.id,
              name: admin.person.name,
              display_name: admin.person.display_name,
              avatar: admin.person.avatar,
              bio: admin.person.bio,
              bot_account: admin.person.bot_account,
            },
          };
        }),
      };
    })()
  );
}

Promise.all(calls).then((instances) => {
  let data = `export const instance_stats = \n `;
  data += JSON.stringify(instances, null, 2) + ";";
  fs.writeFileSync(instanceStatsFile, data);
});

async function getSiteData(domain) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      query: `{node(domain: "${domain}"){
    uptime_alltime
    softwarename
    countryname
    state
    signup
  }}
`,
    });

    const options = {
      hostname: "fediverse.observer",
      path: "/api/",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (d) => {
        data += d;
      });

      res.on("end", () => {
        resolve(JSON.parse(data));
      });
    });

    req.on("error", (error) => {
      reject(err);
    });

    req.write(data);
    req.end();
  });
}
