"use client";

import { useMemo, useState, useEffect } from "react";
import { instance_stats } from "@/shared/instance_stats";
import categories, {
  convertColor,
  getChildrenCategories,
} from "@/data/categories";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Spacer,
  Tooltip,
  User,
  Link,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { mdToHtml } from "@/shared/Markdown";
import { useSearchParams } from "next/navigation";
import { WhitelistEntry } from "@/data/whitelist";

export default function SiteList({
  whitelist,
  slug,
}: {
  whitelist: WhitelistEntry[];
  slug?: string;
}) {
  const [page, setPage] = useState<number>(0);
  const [selectedSite, setSelectedSite] = useState<number>(0);
  const [selectedSites, setSelectedSites] = useState<string[] | null>(null);
  const searchParams = useSearchParams();

  const selectedSiteDetails = useMemo(() => {
    if (selectedSites) {
      return whitelist.find(
        (instance) => instance.domain === selectedSites[selectedSite]
      );
    }

    return null;
  }, [selectedSites, selectedSite]);
  const [childCategories, setChildCategories] = useState<
    | (
        | {
            parent: null;
            slug: string;
            name: string;
            icon: JSX.Element;
            color: string;
          }
        | {
            parent: string;
            slug: string;
            name: string;
            icon: JSX.Element;
            color: string;
          }
      )[]
    | null
  >(null);
  const router = useRouter();

  useEffect(() => {
    setPage(parseInt(searchParams.get("page") || "0"));

    if (slug) {
      const childCategories = getChildrenCategories(slug, whitelist);

      if (childCategories.length !== 0) {
        setChildCategories(childCategories);
        return;
      }

      const matchingSites = whitelist
        .filter((site) => site.tags.includes(slug))
        .map((site) => site.domain);

      if (matchingSites.length === 0) return;

      let randomSite = Math.floor(Math.random() * matchingSites.length);
      setSelectedSite(randomSite);

      setSelectedSites(matchingSites);
    } else {
      const childCategories = getChildrenCategories(null, whitelist);

      if (childCategories.length !== 0) {
        setChildCategories(childCategories);
        return;
      }
    }
  }, []);

  return (
    <div className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2">
      {selectedSites && (
        <div className="flex flex-col gap-3 w-full">
          <Card isBlurred className="w-[80%]">
            <CardBody>
              <p className="text-lg text-default-600">
                Here is a recommended home for your account based on your
                interests!
              </p>
              <p className="text-sm text-default-400">
                You are capable of interacting with content on other sites in
                the fediverse through this site (e.g. other sites using pangora,
                lemmy, kbin, mbin, etc.).
              </p>
              <p className="text-sm text-default-400">
                This site is not affiliated with the developers of pangora, it
                is just part of the fediverse.
              </p>
            </CardBody>
          </Card>
          <Card isBlurred className="p-2 w-full">
            <CardHeader>
              <User
                className=" justify-left"
                name={selectedSiteDetails?.name ?? selectedSites[selectedSite]}
                description={
                  <Link
                    href={
                      selectedSiteDetails
                        ? selectedSiteDetails?.actor_id
                        : `https://${selectedSites[selectedSite]}`
                    }
                    size="sm"
                    isExternal
                  >
                    @{selectedSites[selectedSite]}
                  </Link>
                }
                avatarProps={{
                  src: selectedSiteDetails?.icon,
                }}
              />
            </CardHeader>
            <CardBody className="gap-3">
              <p>
                {selectedSiteDetails?.description ?? "No description provided"}
              </p>
              {selectedSiteDetails && selectedSiteDetails?.admins && (
                <div className="flex gap-3 items-center">
                  <p className="text-default-500">Admins: </p>
                  <div className="justify-start gap-1 flex">
                    {selectedSiteDetails?.admins.map((admin: any) => (
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
              )}
            </CardBody>
            {selectedSiteDetails && (
              <CardFooter className="text-default-500 text-small justify-between flex-wrap gap-3">
                <div className="flex gap-3 flex-wrap">
                  {selectedSiteDetails?.users && (
                    <p>{selectedSiteDetails?.users} Users</p>
                  )}
                  {selectedSiteDetails?.communities && (
                    <p>{selectedSiteDetails?.communities} Communities</p>
                  )}
                </div>
                <div className="flex gap-3 flex-wrap">
                  {selectedSiteDetails?.uptime && (
                    <p>Uptime: {selectedSiteDetails?.uptime}%</p>
                  )}
                  {selectedSiteDetails?.countryname && (
                    <p>
                      Hosted in:{" "}
                      {selectedSiteDetails?.state &&
                      selectedSiteDetails?.state != "Private"
                        ? `${selectedSiteDetails?.state}, `
                        : ""}
                      {selectedSiteDetails?.countryname}
                    </p>
                  )}
                  {selectedSiteDetails?.softwarename && (
                    <p>
                      {selectedSiteDetails?.softwarename} v
                      {selectedSiteDetails?.version}
                    </p>
                  )}
                </div>
              </CardFooter>
            )}
          </Card>
          <div className="flex gap-3">
            <Button
              isExternal
              showAnchorIcon
              href={
                selectedSiteDetails
                  ? selectedSiteDetails?.actor_id
                  : `https://${selectedSites[selectedSite]}`
              }
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
                  let randomSite;
                  let i = 0;
                  while (true) {
                    randomSite = Math.floor(
                      Math.random() * selectedSites.length
                    );

                    if (randomSite !== selectedSite) break;
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
                const category = categories.find(
                  (category) => category.slug === slug
                );
                if (category) {
                  if (category.parent) {
                    router.push(`/join/${category.parent}`);
                  } else {
                    router.push(`/join/`);
                  }
                }
              }}
            >
              <p className="group-hover:transition-all duration-300 delay-75 ease-in-out text-default-600 group-hover:text-default-500">
                Back
              </p>
            </Button>
          </div>
        </div>
      )}
      {childCategories && (
        <div className="flex items-center flex-col">
          <h1 className="text-4xl">Site Selection</h1>
          <h2>What Content do you primarily look at?</h2>
          <Spacer y={5} />
          <div className="flex flex-col gap-3">
            {childCategories
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
                      router.push(`/join/${category.slug}`);
                    }}
                  >
                    {/* group-hover:text-lime-500 */}
                    {/* group-hover:text-green-500 */}
                    {/* group-hover:text-blue-500 */}
                    {/* group-hover:text-indigo-500 */}
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
            {childCategories.length > 10 && (
              <div>
                {page !== 0 && (
                  <Button
                    disableRipple
                    variant="bordered"
                    className="group hover:transition-all hover:scale-110 scale-100 duration-300 ease-in-out delay-75 hover:-translate-y-[0.25em]"
                    onClick={() => {
                      router.push(`/join/${slug}?page=${page - 1}`);
                      setPage(page - 1);
                    }}
                  >
                    <p className="group-hover:transition-all duration-300 delay-75 ease-in-out text-default-600 group-hover:text-default-500">
                      Last Page
                    </p>
                  </Button>
                )}
                {page < childCategories.length / 10 - 1 && (
                  <Button
                    disableRipple
                    variant="bordered"
                    className="group hover:transition-all hover:scale-110 scale-100 duration-300 ease-in-out delay-75 hover:-translate-y-[0.25em]"
                    onClick={() => {
                      router.push(`/join/${slug}?page=${page + 1}`);
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
            {slug && (
              <div>
                <Divider className="my-4" />
                <Button
                  disableRipple
                  variant="bordered"
                  className="group hover:transition-all hover:scale-110 scale-100 duration-300 ease-in-out delay-75 hover:-translate-y-[0.25em]"
                  onClick={() => {
                    const category = categories.find(
                      (category) => category.slug === slug
                    );
                    if (category) {
                      console.log(category.parent);
                      if (category.parent) {
                        router.push(`/join/${category.parent}`);
                      } else {
                        router.push(`/join/`);
                      }
                    }
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
