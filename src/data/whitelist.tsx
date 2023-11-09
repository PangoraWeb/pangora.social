import fs from "fs";
import { getTags } from "./categories";
import { instance_stats } from "@/shared/instance_stats";

export interface WhitelistEntry {
  domain: string;
  tags: Array<string>;
  uptime?: string;
  location?: string;
  softwarename?: string;
  version?: string;
  countryname?: string;
  admins?: any;
  name?: string;
  icon?: string;
  description?: string;
  users?: number;
  communities?: number;
  actor_id?: string;
  state?: string;
}

let whitelist: WhitelistEntry[] = [];
let exportedwhitelist: WhitelistEntry[] = [];
let fetching = true;

createWhitelist();
setInterval(createWhitelist, 24 * 60 * 60 * 1000);

async function createWhitelist() {
  whitelist = [];
  await fetchLocalData();
  await fetchFediseerData();
  fetching = false;
}

async function fetchLocalData() {
  const data = fs.readFileSync("src/data/whitelist.txt");

  const string = data.toString();
  const lines = string.split("\n");

  lines.forEach((line) => {
    const splitLine = line.split(":").map((split) => split.trim());
    if (splitLine.length < 2) return;

    whitelist.push({
      domain: splitLine[0],
      tags: splitLine[1].split(",").map((split) => split.trim()),
    });
  });
}

async function fetchFediseerData() {
  const res = await fetch(
    "https://fediseer.com/api/v1/censures_given/programming.dev,lemmy.world"
  );
  const data = await res.json();

  const censuredInstances = data.instances.map(
    (instance: { domain: string }) => instance.domain
  );

  const allowedTags = getTags().map((tag) => tag.slug);

  // Caps out at 100 pages
  for (let i = 0; i < 100; ++i) {
    const res = await fetch(
      `https://fediseer.com/api/v1/whitelist?software_csv=lemmy,kbin,mbin,pangora&page=${i}`
    );
    const data = await res.json();

    if (data.instances.length == 0) break; // no instances on this page

    for (const instance of data.instances) {
      const tags = instance.tags
        .map((tag: String) => tag.toLowerCase().replaceAll(" ", "-"))
        .filter((tag: string) => allowedTags.includes(tag));

      const whitelistInstance = whitelist.find(
        (whitelistInstance) => whitelistInstance.domain == instance.domain
      );

      if (whitelistInstance) {
        for (const tag of tags) {
          if (!whitelistInstance.tags.includes(tag)) {
            whitelistInstance.tags.push(tag);
          }
        }
      } else {
        whitelist.push({
          domain: instance.domain,
          tags: tags,
        });
      }
    }
  }

  whitelist = whitelist.filter(
    (instance) => !censuredInstances.includes(instance.domain)
  );

  whitelist = whitelist.map((site) => {
    const found = instance_stats.find((instance) => {
      if (!instance) return;
      return (
        instance.site_view.site.actor_id.slice(
          8,
          instance.site_view.site.actor_id.length - 1
        ) === site.domain
      );
    });

    if (found) {
      if (found.observer) {
        return {
          domain: site.domain,
          tags: site.tags,
          version: found.version,
          admins: found.admins,
          name: found.site_view.site.name,
          icon: found.site_view.site.icon,
          description: found.site_view.site.description,
          users: found.site_view.counts.users,
          communities: found.site_view.counts.communities,
          uptime: found.observer.uptime_alltime,
          softwarename: found.observer.softwarename,
          actor_id: found.site_view.site.actor_id,
          state: found.observer.state || undefined,
          countryname: found.observer.countryname,
        };
      } else {
        return {
          domain: site.domain,
          tags: site.tags,
          version: found.version,
          admins: found.admins,
          name: found.site_view.site.name,
          icon: found.site_view.site.icon,
          description: found.site_view.site.description,
          users: found.site_view.counts.users,
          communities: found.site_view.counts.communities,
          actor_id: found.site_view.site.actor_id,
        };
      }
    } else {
      return {
        domain: site.domain,
        tags: site.tags,
      };
    }
  });

  whitelist = whitelist.filter((instance) => {
    if (!instance.users) return false;

    return instance.users > 50;
  });

  exportedwhitelist = whitelist;
}

export default async function () {
  const poll = (resolve: Function) => {
    if (!fetching) resolve();
    else setTimeout(() => poll(resolve), 400);
  };

  await new Promise(poll);

  return exportedwhitelist;
}
