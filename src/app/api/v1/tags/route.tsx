import { getTags } from "@/data/categories";

export async function GET() {
  const response = Response.json(
    JSON.stringify(
      getTags().map((tag) => {
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
