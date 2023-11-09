const fs = require("fs");
const http = require("lemmy-js-client");
const https = require("https");

const instanceStatsFile = "src/shared/instance_stats.js";

let calls = [];
let whitelist = [];

fetchData();
setInterval(fetchData, 24 * 60 * 60 * 1000);

async function fetchData() {
  calls = [];
  whitelist = [];
  fetchLocalData();
}

async function fetchLocalData() {
  console.log("FETCHING LOCAL DATA");

  const data = fs.readFileSync("src/data/whitelist.txt");

  const string = data.toString();
  const lines = string.split("\n");

  lines.forEach((line) => {
    const splitLine = line.split(":").map((split) => split.trim());

    whitelist.push(splitLine[0]);
  });

  fetchFediseerData();
}

async function fetchFediseerData() {
  console.log("FETCHING FEDISEER DATA");

  const res = await fetch(
    "https://fediseer.com/api/v1/censures_given/programming.dev,lemmy.world"
  );
  const data = await res.json();

  const censuredInstances = data.instances.map((instance) => instance.domain);

  // Caps out at 100 pages
  for (let i = 0; i < 100; ++i) {
    const res = await fetch(
      `https://fediseer.com/api/v1/whitelist?software_csv=lemmy,kbin,mbin,pangora&page=${i}`
    );
    const data = await res.json();

    if (data.instances.length == 0) break; // no instances on this page

    for (const instance of data.instances) {
      const whitelistInstance = whitelist.find(
        (whitelistInstance) => whitelistInstance == instance.domain
      );

      if (!whitelistInstance) {
        whitelist.push(instance.domain);
      }
    }
  }

  whitelist = whitelist.filter(
    (instance) => !censuredInstances.includes(instance.domain)
  );

  getData();
}

function getData() {
  console.log("GETTING DATA");

  for (let i = 0; i < whitelist.length; ++i) {
    const domain = whitelist[i];

    const client = new http.LemmyHttp("https://" + domain);
    calls.push(
      (async () => {
        let site;
        let site2;

        try {
          site = await client.getSite({});
          site2 = await getSiteData(domain);
        } catch (e) {
          console.log(`COULD NOT LOAD ${domain}`);
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
}
