import { getChildrenCategories, getTags } from "@/data/categories";
import GetWhitelist from "@/data/whitelist";
import { instance_stats } from "@/shared/instance_stats";
import { NextApiRequest } from "next";

export async function GET(
  req: NextApiRequest,
  {
    params,
  }: {
    params: { slug: string };
  }
) {
  const whitelist = await GetWhitelist();
  const childCategories = getChildrenCategories(params.slug, whitelist);
  let response;

  if (childCategories.length !== 0) {
    response = Response.json(
      JSON.stringify(
        childCategories.map((tag) => {
          return {
            parent: tag.parent,
            slug: tag.slug,
            name: tag.name,
            color: tag.color,
          };
        })
      )
    );
  } else {
    const selectedSites = (await GetWhitelist()).filter((site) =>
      site.tags.includes(params.slug)
    );

    response = Response.json(JSON.stringify(selectedSites));
  }

  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET");
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  return response;
}
