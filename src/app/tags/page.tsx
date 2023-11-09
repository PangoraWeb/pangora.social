import SiteList from "@/components/SiteList";
import { convertBaseColor, getTags, getTag } from "@/data/categories";
import GetWhitelist from "@/data/whitelist";
import { Spacer } from "@nextui-org/spacer";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/react";

export default async function JoinPage({
  params,
}: {
  params: { slug: string };
}) {
  const tags = getTags();

  const categoryTags = (() => {
    const dict: { [slug: string]: any[] } = {};
    tags.forEach((tag) => {
      if (!dict.hasOwnProperty(tag.parent || tag.slug)) {
        dict[tag.parent || tag.slug] = [];
      }

      dict[tag.parent || tag.slug].push(tag);
    });

    return dict;
  })();

  return (
    <div className="flex items-center justify-center text-default-600 w-full">
      <div className="flex flex-col items-center w-full mt-20">
        <p className="text-3xl">Tag List</p>
        <Spacer y={5} />
        <p className="text-md">
          Here is a list of valid tags you can put on your instance in{" "}
          <a href="https://gui.fediseer.com/" className="text-blue-400">
            fediseer
          </a>{" "}
          to show up on the site in those categories.
        </p>
        <p>
          Add a tag for any subject that your instance primarily discusses or is
          the primary hub for.
        </p>
        <p>
          Abusing the tag system by spamming tags may result in your instance
          getting banned from the site list.
        </p>
        <Spacer y={5} />
        <p className="text-default-400">
          Sites also need at least 50 users to be listed
        </p>
        <Spacer y={10} />
        {/* text-lime-500 */}
        {/* text-green-500 */}
        {/* text-blue-500 */}
        {/* text-indigo-500 */}
        {/* text-red-500 */}
        {/* text-orange-500 */}
        {/* text-yellow-500 */}
        {/* text-rose-500 */}
        {/* text-violet-500 */}
        {/* text-teal-500 */}
        {/* text-pink-500 */}
        {/* text-emerald-500 */}
        {/* text-violet-500 */}
        {/* text-amber-500 */}
        {/* text-fuchsia-500 */}
        {/* text-cyan-500 */}
        {/* text-purple-500 */}
        {/* text-default-500 */}
        {/* text-sky-500 */}
        {Object.keys(categoryTags).map((categoryTag) => {
          return (
            <div className="flex flex-col items-center">
              <div
                key={categoryTag}
                className={`flex flex-row text-lg ${convertBaseColor(
                  getTag(categoryTag)?.color || "neutral"
                )}`}
              >
                {getTag(categoryTag)?.icon}
                <Spacer />
                <p>{getTag(categoryTag)?.name}</p>
              </div>
              <div className="flex flex-col text-center">
                {categoryTags[categoryTag].map((tag) => {
                  return <p>{tag.slug}</p>;
                })}
              </div>
              <Spacer y={5} />
            </div>
          );
        })}
        <Spacer y={10} />
        <p>
          Is there a tag missing that you feel should be added? Make an issue in
          the{" "}
          <a
            href="https://github.com/PangoraWeb/pangora.social/issues"
            className="text-blue-400"
          >
            github repostory
          </a>{" "}
        </p>
        <Spacer y={5} />
        <p>
          Tags may be split into subcategories in the future if theres many
          instances for that category. Splits will be announced in the{" "}
          <a href="https://programming.dev/c/pangora" className="text-blue-400">
            pangora programming.dev community
          </a>{" "}
        </p>
        <Spacer y={5} />
      </div>
    </div>
  );
}
