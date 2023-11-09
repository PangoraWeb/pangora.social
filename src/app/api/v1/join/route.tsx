import { getChildrenCategories } from "@/data/categories";
import GetWhitelist from "@/data/whitelist";

export async function GET() {
  const whitelist = await GetWhitelist();
  const childCategories = getChildrenCategories(null, whitelist);

  let response = Response.json(
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

  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Methods", "GET");
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  return response;
}
