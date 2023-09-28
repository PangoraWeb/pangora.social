"use client";

import { Button } from "@nextui-org/button";
import { useState, useMemo } from "react";
import {
  Card,
  Spacer,
  Link,
  AvatarGroup,
  Avatar,
  Image,
  CardBody,
  CardHeader,
  CardFooter,
  User,
  Tooltip,
  Divider,
} from "@nextui-org/react";
import { instance_stats } from "@/shared/instance_stats";
import NextImage from "next/image";
import { mdToHtml } from "@/shared/Markdown";
import categories, { convertColor } from "@/data/categories";

export default function SiteList({
  whitelist,
}: {
  whitelist: { url: string; categories: Array<string> }[];
}) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState<number>(0);
  const [selectedSite, setSelectedSite] = useState<number>(0);
  const [selectedSites, setSelectedSites] = useState<string[] | null>(null);

  const selectedSiteDetails = useMemo(() => {
    if (selectedSites) {
      return instance_stats.find((instance) => {
        if (!instance) return;
        return (
          instance.site_view.site.actor_id.slice(
            8,
            instance.site_view.site.actor_id.length - 1
          ) === selectedSites[selectedSite]
        );
      });
    }

    return null;
  }, [selectedSites, selectedSite]);

  return (
    <div className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2">
      {selectedSites && (
        <div className="flex flex-col gap-3 w-full">
          <Card isBlurred className="p-2 w-full">
            <CardHeader>
              <User
                className=" justify-left"
                name={
                  selectedSiteDetails?.site_view.site.name ??
                  selectedSites[selectedSite]
                }
                description={
                  <Link
                    href={selectedSiteDetails?.site_view.site.actor_id}
                    size="sm"
                    isExternal
                  >
                    @{selectedSites[selectedSite]}
                  </Link>
                }
                avatarProps={{
                  src: selectedSiteDetails?.site_view.site.icon,
                }}
              />
            </CardHeader>
            <CardBody className="gap-3">
              <p>
                {selectedSiteDetails?.site_view.site.description ??
                  "No description provided"}
              </p>
              <div className="flex gap-3 items-center">
                <p className="text-default-500">Admins: </p>
                <div className="justify-start gap-1 flex">
                  {selectedSiteDetails?.admins.map((admin) => (
                    <Tooltip
                      delay={500}
                      key={admin.person.id}
                      showArrow
                      content={
                        <div>
                          <div className="px-2 py-2">
                            <div className="flex">
                              <Avatar
                                src={
                                  "avatar" in admin.person
                                    ? admin.person?.avatar
                                    : undefined
                                }
                                isBordered
                              />
                              <div className="ml-3">
                                <h6 className="text-sm font-bold flex text-center items-center">
                                  {admin.person?.display_name ??
                                    admin.person.name}
                                  {admin.person?.bot_account && (
                                    <div className="ml-1 px-1 border-default-100 border-1 bg-default-200 rounded-lg text-default-400">
                                      Bot
                                    </div>
                                  )}
                                </h6>
                                <h6 className="text-xs">
                                  @{admin.person?.name}
                                </h6>
                              </div>
                            </div>
                            <p
                              className="text-xs py-3 prose prose-invert"
                              dangerouslySetInnerHTML={mdToHtml(
                                "bio" in admin.person
                                  ? admin.person?.bio
                                  : undefined
                              )}
                            ></p>
                          </div>
                        </div>
                      }
                      className="flex"
                      classNames={{
                        base: `w-full`,
                      }}
                    >
                      <Avatar
                        size="sm"
                        src={
                          "avatar" in admin.person
                            ? admin.person?.avatar
                            : undefined
                        }
                        className=""
                        classNames={{
                          base: "transition-all duration-500 w-4 max-w-4 min-w-4 h-4 max-h-4 min-h-4 data-[hover=true]:scale-150 data-[hover=true]:-translate-y-1",
                        }}
                      />
                    </Tooltip>
                  ))}
                </div>
              </div>
            </CardBody>
            <CardFooter className="text-default-500 text-small justify-between flex-wrap gap-3">
              <div className="flex gap-3 flex-wrap">
                <p>{selectedSiteDetails?.site_view.counts.users} Users</p>
                <p>
                  {selectedSiteDetails?.site_view.counts.communities}{" "}
                  Communities
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <p>Uptime: {selectedSiteDetails?.observer.uptime_alltime}%</p>
                <p>
                  Hosted in:{" "}
                  {selectedSiteDetails?.observer.state &&
                  selectedSiteDetails?.observer.state != "Private"
                    ? `${selectedSiteDetails?.observer.state}, `
                    : ""}
                  {selectedSiteDetails?.observer.countryname}
                </p>
                <p>
                  {selectedSiteDetails?.observer.softwarename} v
                  {selectedSiteDetails?.version}
                </p>
              </div>
            </CardFooter>
          </Card>
          <div className="flex gap-3">
            <Button
              isExternal
              showAnchorIcon
              href={selectedSiteDetails?.site_view.site.actor_id}
              as={Link}
              disableRipple
              variant="bordered"
              className="group hover:transition-all hover:scale-110 scale-100 duration-300 ease-in-out delay-75 hover:-translate-y-[0.25em]"
            >
              <p className="group-hover:transition-all duration-300 delay-75 ease-in-out text-default-600 group-hover:text-default-500">
                Go to Site
              </p>
            </Button>
            {selectedSites.length > 1 && (
              <Button
                disableRipple
                variant="bordered"
                className="group hover:transition-all hover:scale-110 scale-100 duration-300 ease-in-out delay-75 hover:-translate-y-[0.25em]"
                onClick={() => {
                  let i = 0;
                  let randomSite = 0;

                  while (true) {
                    randomSite = Math.floor(
                      Math.random() * selectedSites.length
                    );

                    if (
                      instance_stats.find((instance) => {
                        if (!instance) return;
                        return (
                          instance.site_view.site.actor_id.slice(
                            8,
                            instance.site_view.site.actor_id.length - 1
                          ) === selectedSites[randomSite]
                        );
                      }) !== undefined &&
                      randomSite !== selectedSite
                    )
                      break;
                    i += 1;
                    if (i == 25) return;
                  }
                  setSelectedSite(randomSite);
                }}
              >
                <p className="group-hover:transition-all duration-300 delay-75 ease-in-out text-default-600 group-hover:text-default-500">
                  Get Another Site
                </p>
              </Button>
            )}
            <Button
              disableRipple
              variant="bordered"
              className="group hover:transition-all hover:scale-110 scale-100 duration-300 ease-in-out delay-75 hover:-translate-y-[0.25em]"
              onClick={() => {
                setSelectedSites(null);
              }}
            >
              <p className="group-hover:transition-all duration-300 delay-75 ease-in-out text-default-600 group-hover:text-default-500">
                Back
              </p>
            </Button>
          </div>
        </div>
      )}
      {!selectedSites && (
        <div className="flex items-center flex-col">
          <h1 className="text-4xl">Site Selection</h1>
          <h2>What Content do you primarily look at?</h2>
          <Spacer y={5} />
          <div className="flex flex-col gap-3">
            {categories
              .filter((category) => {
                if (selectedCategory == "") return !category.parent;
                return category.parent == selectedCategory;
              })
              .slice(page * 10, page * 10 + 10)
              .map((category) => {
                return (
                  <Button
                    disableRipple
                    key={category.slug}
                    startContent={
                      <div
                        className={`group-hover:transition-all duration-300 delay-75 ease-in-out text-default-600 ${
                          convertColor(category?.color) ??
                          "group-hover:text-default-500"
                        }`}
                      >
                        {category.icon}
                      </div>
                    }
                    variant="bordered"
                    className="group hover:transition-all hover:scale-110 scale-100 duration-300 ease-in-out delay-75 hover:-translate-y-[0.25em]"
                    onClick={() => {
                      let newCategory = category.slug;

                      const matchingSites = whitelist.filter((site) =>
                        site.categories.includes(newCategory)
                      );

                      if (matchingSites.length > 0) {
                        let i = 0;
                        let randomSite = 0;

                        while (true) {
                          randomSite = Math.floor(
                            Math.random() * matchingSites.length
                          );

                          if (
                            instance_stats.find((instance: any) => {
                              if (!instance) return;
                              return (
                                instance.site_view.site.actor_id.slice(
                                  8,
                                  instance.site_view.site.actor_id.length - 1
                                ) === matchingSites[randomSite].url
                              );
                            }) !== undefined
                          )
                            break;
                          i += 1;
                          if (i == 25) return;
                        }
                        setSelectedSites(matchingSites.map((site) => site.url));
                        setSelectedSite(randomSite);
                        return;
                      }

                      setSelectedCategory(newCategory);
                    }}
                  >
                    {/* group-hover:text-lime-500 */}
                    {/* group-hover:text-green-500 */}
                    {/* group-hover:text-blue-500 */}
                    {/* group-hover:text-red-500 */}
                    {/* group-hover:text-orange-500 */}
                    {/* group-hover:text-yellow-500 */}
                    {/* group-hover:text-rose-500 */}
                    {/* group-hover:text-violet-500 */}
                    {/* group-hover:text-teal-500 */}
                    {/* group-hover:text-pink-500 */}
                    {/* group-hover:text-emerald-500 */}
                    {/* group-hover:text-violet-500 */}
                    {/* group-hover:text-amber-500 */}
                    {/* group-hover:text-fuchsia-500 */}
                    {/* group-hover:text-cyan-500 */}
                    {/* group-hover:text-purple-500 */}
                    {/* group-hover:text-default-500 */}
                    {/* group-hover:text-sky-500 */}
                    <p
                      className={`group-hover:transition-all duration-300 delay-75 ease-in-out text-default-600 ${
                        convertColor(category?.color) ??
                        "group-hover:text-default-500"
                      }`}
                    >
                      {category.name}
                    </p>
                  </Button>
                );
              })}
            {categories.filter((category) => {
              if (selectedCategory == "") return !category.parent;
              return category.parent == selectedCategory;
            }).length > 10 && (
              <div>
                {page !== 0 && (
                  <Button
                    disableRipple
                    variant="bordered"
                    className="group hover:transition-all hover:scale-110 scale-100 duration-300 ease-in-out delay-75 hover:-translate-y-[0.25em]"
                    onClick={() => {
                      setPage(page - 1);
                    }}
                  >
                    <p className="group-hover:transition-all duration-300 delay-75 ease-in-out text-default-600 group-hover:text-default-500">
                      Last Page
                    </p>
                  </Button>
                )}
                {page <
                  categories.filter((category) => {
                    if (selectedCategory == "") return !category.parent;
                    return category.parent == selectedCategory;
                  }).length /
                    10 -
                    1 && (
                  <Button
                    disableRipple
                    variant="bordered"
                    className="group hover:transition-all hover:scale-110 scale-100 duration-300 ease-in-out delay-75 hover:-translate-y-[0.25em]"
                    onClick={() => {
                      setPage(page + 1);
                    }}
                  >
                    <p className="group-hover:transition-all duration-300 delay-75 ease-in-out text-default-600 group-hover:text-default-500">
                      Next Page
                    </p>
                  </Button>
                )}
              </div>
            )}
            {selectedCategory && (
              <div>
                <Divider className="my-4" />
                <Button
                  disableRipple
                  variant="bordered"
                  className="group hover:transition-all hover:scale-110 scale-100 duration-300 ease-in-out delay-75 hover:-translate-y-[0.25em]"
                  onClick={() => {
                    setPage(0);
                    const category = categories.find(
                      (category) => category.slug === selectedCategory
                    );
                    if (category)
                      setSelectedCategory(category.parent as string);
                  }}
                >
                  <p className="group-hover:transition-all duration-300 delay-75 ease-in-out text-default-600 group-hover:text-default-500">
                    Back
                  </p>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
