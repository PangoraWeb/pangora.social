import SiteList from "@/components/SiteList";
import GetWhitelist from "@/data/whitelist";

export default async function JoinPage({
  params,
}: {
  params: { slug: string };
}) {
  const whitelist = await GetWhitelist();

  return (
    <div className="flex items-center justify-center h-screen text-default-600 w-full">
      <div className="flex flex-col items-center w-full">
        <SiteList whitelist={whitelist} slug={params.slug} />
      </div>
    </div>
  );
}
