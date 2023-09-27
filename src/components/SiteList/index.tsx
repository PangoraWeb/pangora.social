"use client";

import { Button } from "@nextui-org/button";
import ComputerIcon from "@/icons/ComputerIcon";
import CodeIcon from "@/icons/CodeIcon";
import GamepadIcon from "@/icons/GamepadIcon";
import BaseballIcon from "@/icons/BaseballIcon";
import WorldIcon from "@/icons/WorldIcon";
import MoneyIcon from "@/icons/MoneyIcon";
import LeafIcon from "@/icons/LeafIcon";
import MovieIcon from "@/icons/MovieIcon";
import MessagesIcon from "@/icons/MessagesIcon";
import StopIcon from "@/icons/StopIcon";
import BrushIcon from "@/icons/BrushIcon";
import { useState, useMemo } from "react";
import MicrochipIcon from "@/icons/MicrochipIcon";
import AndroidIcon from "@/icons/AndroidIcon";
import PlanetIcon from "@/icons/PlanetIcon";
import CardsIcon from "@/icons/CardsIcon";
import FlagIcon from "@/icons/FlagIcon";
import PawIcon from "@/icons/PawIcon";
import HammerIcon from "@/icons/HammerIcon";
import BookIcon from "@/icons/BookIcon";
import TvIcon from "@/icons/TvIcon";
import MusicIcon from "@/icons/MusicIcon";
import CanadaIcon from "@/icons/CanadaIcon";
import GermanyIcon from "@/icons/GermanyIcon";
import SunHighIcon from "@/icons/SunHighIcon";
import USAIcon from "@/icons/USAIcon";
import NZIcon from "@/icons/NZIcon";
import BrazilIcon from "@/icons/BrazilIcon";
import AustraliaIcon from "@/icons/AustraliaIcon";
import SwedenIcon from "@/icons/SwedenIcon";
import ItalyIcon from "@/icons/ItalyIcon";
import FranceIcon from "@/icons/FranceIcon";
import MalaysiaIcon from "@/icons/MalaysiaIcon";
import NetherlandsIcon from "@/icons/NetherlandsIcon";
import PolandIcon from "@/icons/PolandIcon";
import PortugalIcon from "@/icons/PortugalIcon";
import UKIcon from "@/icons/UKIcon";
import ACircleIcon from "@/icons/ACircleIcon";
import SwordsIcon from "@/icons/SwordsIcon";
import PhotoIcon from "@/icons/PhotoIcon";
import ShieldIcon from "@/icons/ShieldIcon";
import SkullIcon from "@/icons/SkullIcon";
import AccessibleIcon from "@/icons/AccessibleIcon";
import ClockHour2Icon from "@/icons/ClockHour2Icon";
import CompassIcon from "@/icons/CompassIcon";
import RadioIcon from "@/icons/RadioIcon";
import DenmarkIcon from "@/icons/DenmarkIcon";
import WHexagonIcon from "@/icons/WHexagonIcon";
import RobotIcon from "@/icons/RobotIcon";
import InfinityIcon from "@/icons/InfinityIcon";
import MoodSmileBeamIcon from "@/icons/MoodSmileBeamIcon";
import { GetSiteResponse } from "lemmy-js-client";
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
} from "@nextui-org/react";
import { instance_stats } from "@/shared/instance_stats";
import NextImage from "next/image";
import { mdToHtml } from "@/shared/Markdown";

const categories = [
  {
    slug: "technology",
    name: "Technology",
    icon: <ComputerIcon />,
    color: "group-hover:text-teal-500",
  },
  {
    slug: "gaming",
    name: "Gaming",
    icon: <GamepadIcon />,
    color: "group-hover:text-violet-500",
  },
  {
    slug: "social",
    name: "Social and Community",
    icon: <MessagesIcon />,
    color: "group-hover:text-yellow-500",
  },
  {
    slug: "entertainment",
    name: "Entertainment",
    icon: <MovieIcon />,
    color: "group-hover:text-red-500",
  },
  {
    slug: "science",
    name: "Science and Nature",
    icon: <LeafIcon />,
    color: "group-hover:text-green-500",
  },
  {
    slug: "finance",
    name: "Cryptocurrency and Finance",
    icon: <MoneyIcon />,
    color: "group-hover:text-lime-500",
  },
  {
    slug: "sports",
    name: "Sports",
    icon: <BaseballIcon />,
    color: "group-hover:text-orange-500",
  },
  {
    slug: "art",
    name: "Creative Arts",
    icon: <BrushIcon />,
    color: "group-hover:text-pink-500",
  },
  {
    slug: "nsfw",
    name: "NSFW",
    icon: <StopIcon />,
    color: "group-hover:text-amber-500",
  },
  {
    slug: "regional",
    name: "Regional",
    icon: <WorldIcon />,
    color: "group-hover:text-emerald-500",
  },
  {
    slug: "general",
    name: "Everything / Other Topics",
    icon: <SunHighIcon />,
    color: "group-hover:text-default-500",
  },
  {
    categories: "technology",
    slug: "programming",
    name: "Programming & Development",
    icon: <CodeIcon />,
    color: "group-hover:text-teal-500",
  },
  {
    categories: "technology",
    slug: "android",
    name: "Android",
    icon: <AndroidIcon />,
    color: "group-hover:text-green-500",
  },
  {
    categories: "technology",
    slug: "radio",
    name: "Radio",
    icon: <RadioIcon />,
    color: "group-hover:text-violet-500",
  },
  {
    categories: "technology",
    slug: "general",
    name: "General Technology",
    icon: <MicrochipIcon />,
    color: "group-hover:text-default-500",
  },
  {
    categories: "technology",
    slug: "ai",
    name: "Artificial Intelligence",
    icon: <RobotIcon />,
    color: "group-hover:text-default-500",
  },
  {
    categories: "technology",
    slug: "gamedev",
    name: "Game Development",
    icon: <GamepadIcon />,
    color: "group-hover:text-default-500",
  },
  {
    categories: "gaming",
    slug: "starcitizen",
    name: "Star Citizen",
    icon: <PlanetIcon />,
    color: "group-hover:text-violet-500",
  },
  {
    categories: "gaming",
    slug: "mtg",
    name: "Magic: The Gathering",
    icon: <CardsIcon />,
    color: "group-hover:text-orange-500",
  },
  {
    categories: "gaming",
    slug: "lifeisstrange",
    name: "Life is Strange",
    icon: <PhotoIcon />,
    color: "group-hover:text-pink-500",
  },
  {
    categories: "gaming",
    slug: "diyrpg",
    name: "DIYRPG",
    icon: <SwordsIcon />,
    color: "group-hover:text-amber-500",
  },
  {
    categories: "gaming",
    slug: "ttrpg",
    name: "TTRPG",
    icon: <ShieldIcon />,
    color: "group-hover:text-red-500",
  },
  {
    categories: "gaming",
    slug: "warframe",
    name: "Warframe or Soulframe",
    icon: <WHexagonIcon />,
    color: "group-hover:text-blue-500",
  },
  {
    categories: "gaming",
    slug: "general",
    name: "All / Other Games",
    icon: <GamepadIcon />,
    color: "group-hover:text-default-500",
  },
  {
    categories: "social",
    slug: "lgbtq",
    name: "LGBTQ+",
    icon: <FlagIcon />,
    color: "group-hover:text-pink-500",
  },
  {
    categories: "social",
    slug: "furry",
    name: "Furry",
    icon: <PawIcon />,
    color: "group-hover:text-teal-500",
  },
  {
    categories: "social",
    slug: "anarchist",
    name: "Anarchist",
    icon: <ACircleIcon />,
    color: "group-hover:text-red-500",
  },
  {
    categories: "social",
    slug: "blind",
    name: "Blind",
    icon: <AccessibleIcon />,
    color: "group-hover:text-fuchsia-500",
  },
  {
    categories: "social",
    slug: "neurodivergence",
    name: "Neurodivergence",
    icon: <InfinityIcon />,
    color: "group-hover:text-fuchsia-500",
  },
  {
    categories: "social",
    slug: "cypherpunk",
    name: "CypherPunk",
    icon: <SkullIcon />,
    color: "group-hover:text-violet-500",
  },
  {
    categories: "social",
    slug: "marxist",
    name: "Marxist-Leninist",
    icon: <HammerIcon />,
    color: "group-hover:text-rose-500",
  },
  {
    categories: "social",
    slug: "compass",
    name: "Political Compass",
    icon: <CompassIcon />,
    color: "group-hover:text-blue-500",
  },
  {
    categories: "social",
    slug: "memes",
    name: "Memes",
    icon: <MoodSmileBeamIcon />,
    color: "group-hover:text-blue-500",
  },
  {
    categories: "entertainment",
    slug: "movie",
    name: "Movies & TV Shows",
    icon: <MovieIcon />,
    color: "group-hover:text-red-500",
  },
  {
    categories: "entertainment",
    slug: "literature",
    name: "Literature",
    icon: <BookIcon />,
    color: "group-hover:text-teal-500",
  },
  {
    categories: "entertainment",
    slug: "anime",
    name: "Anime",
    icon: <TvIcon />,
    color: "group-hover:text-orange-500",
  },
  {
    categories: "entertainment",
    slug: "piracy",
    name: "Piracy",
    icon: <SkullIcon />,
    color: "group-hover:text-orange-500",
  },
  {
    categories: "finance",
    slug: "monero",
    name: "Monero",
    icon: <MoneyIcon />,
    color: "group-hover:text-orange-500",
  },
  {
    categories: "finance",
    slug: "gme",
    name: "GME",
    icon: <MoneyIcon />,
    color: "group-hover:text-red-500",
  },
  {
    categories: "art",
    slug: "music",
    name: "Music",
    icon: <MusicIcon />,
    color: "group-hover:text-yellow-500",
  },
  {
    categories: "entertainment/movie",
    slug: "startrek",
    name: "Star Trek",
    icon: <PlanetIcon />,
    color: "group-hover:text-yellow-500",
  },
  {
    categories: "entertainment/movie",
    slug: "general",
    name: "All / Other Movies & Tv Shows",
    icon: <MovieIcon />,
    color: "group-hover:text-default-500",
  },
  {
    categories: "regional",
    slug: "australia",
    name: "Australia",
    icon: <AustraliaIcon />,
    color: "group-hover:text-yellow-500",
  },
  {
    categories: "regional",
    slug: "brazil",
    name: "Brazil",
    icon: <BrazilIcon />,
    color: "group-hover:text-green-500",
  },
  {
    categories: "regional",
    slug: "canada",
    name: "Canada",
    icon: <CanadaIcon />,
    color: "group-hover:text-red-500",
  },
  {
    categories: "regional",
    slug: "denmark",
    name: "Denmark",
    icon: <DenmarkIcon />,
    color: "group-hover:text-red-500",
  },
  {
    categories: "regional",
    slug: "france",
    name: "France",
    icon: <FranceIcon />,
    color: "group-hover:text-blue-500",
  },
  {
    categories: "regional",
    slug: "germany",
    name: "Germany",
    icon: <GermanyIcon />,
    color: "group-hover:text-yellow-500",
  },
  {
    categories: "regional",
    slug: "italy",
    name: "Italy",
    icon: <ItalyIcon />,
    color: "group-hover:text-green-500",
  },
  {
    categories: "regional",
    slug: "malaysia",
    name: "Malaysia",
    icon: <MalaysiaIcon />,
    color: "group-hover:text-amber-500",
  },
  {
    categories: "regional",
    slug: "netherlands",
    name: "Netherlands",
    icon: <NetherlandsIcon />,
    color: "group-hover:text-orange-500",
  },
  {
    categories: "regional/other",
    slug: "nz",
    name: "New Zealand",
    icon: <NZIcon />,
    color: "group-hover:text-lime-500",
  },
  {
    categories: "regional/other",
    slug: "poland",
    name: "Poland",
    icon: <PolandIcon />,
    color: "group-hover:text-red-500",
  },
  {
    categories: "regional/other",
    slug: "portugal",
    name: "Portugal",
    icon: <PortugalIcon />,
    color: "group-hover:text-red-500",
  },
  {
    categories: "regional/other",
    slug: "sweden",
    name: "Sweden",
    icon: <SwedenIcon />,
    color: "group-hover:text-yellow-500",
  },
  {
    categories: "regional/other",
    slug: "uk",
    name: "United Kingdom",
    icon: <UKIcon />,
    color: "group-hover:text-sky-500",
  },
  {
    categories: "regional/other",
    slug: "midwest",
    name: "Midwest USA",
    icon: <USAIcon />,
    color: "group-hover:text-blue-500",
  },
  {
    categories: "regional",
    slug: "other",
    name: "Other",
    icon: <WorldIcon />,
    color: "group-hover:text-default-500",
  },
  {
    categories: "science",
    slug: "solarpunk",
    name: "Solarpunk",
    icon: <SunHighIcon />,
    color: "group-hover:text-green-500",
  },
  {
    categories: "science",
    slug: "futurology",
    name: "Futurology",
    icon: <ClockHour2Icon />,
    color: "group-hover:text-teal-500",
  },
  {
    categories: "science",
    slug: "general",
    name: "All / Other Science & Nature",
    icon: <LeafIcon />,
    color: "group-hover:text-default-500",
  },
];

const sites = [
  {
    categories: "technology/programming",
    url: "programming.dev",
  },
  {
    categories: "technology/gamedev",
    url: "programming.dev",
  },
  {
    categories: "technology/radio",
    url: "lemmy.radio",
  },
  {
    categories: "technology/android",
    url: "lemdro.id",
  },
  {
    categories: "technology/general",
    url: "discuss.tchncs.de",
  },
  {
    categories: "technology/general",
    url: "lemmy.sdf.org",
  },
  {
    categories: "technology/general",
    url: "infosec.pub",
  },
  {
    categories: "technology/ai",
    url: "lemmy.dbzer0.com",
  },
  {
    categories: "gaming/warframe",
    url: "dormi.zone",
  },
  {
    categories: "gaming/starcitizen",
    url: "citizensgaming.com",
  },
  {
    categories: "gaming/mtg",
    url: "mtgzone.com",
  },
  {
    categories: "gaming/general",
    url: "lemmy.zip",
  },
  {
    categories: "social/lgbtq",
    url: "lemmy.blahaj.zone",
  },
  {
    categories: "social/furry",
    url: "pawb.social",
  },
  {
    categories: "social/furry",
    url: "yiffit.net",
  },
  {
    categories: "social/marxist",
    url: "lemmygrad.ml",
  },
  {
    categories: "social/marxist",
    url: "hexbear.net",
  },
  {
    categories: "social/blind",
    url: "rblind.com",
  },
  {
    categories: "social/neurodivergence",
    url: "lemmy.dbzer0.com",
  },
  {
    categories: "social/memes",
    url: "lemmy.blahaj.zone",
  },
  {
    categories: "social/memes",
    url: "lemmy.ml",
  },
  {
    categories: "social/compass",
    url: "lemmy.basedcount.com",
  },
  {
    categories: "entertainment/movie/startrek",
    url: "startrek.website",
  },
  {
    categories: "entertainment/movie/general",
    url: "lemmy.film",
  },
  {
    categories: "entertainment/literature",
    url: "literature.cafe",
  },
  {
    categories: "entertainment/anime",
    url: "ani.social",
  },
  {
    categories: "entertainment/piracy",
    url: "lemmy.dbzer0.com",
  },
  {
    categories: "science/solarpunk",
    url: "slrpnk.net",
  },
  {
    categories: "science/general",
    url: "mander.xyz",
  },
  {
    categories: "finance/monero",
    url: "monero.town",
  },
  {
    categories: "sports",
    url: "fanaticus.social",
  },
  {
    categories: "art/music",
    url: "lemmy.studio",
  },
  {
    categories: "nsfw",
    url: "pornlemmy.com",
  },
  {
    categories: "nsfw",
    url: "lemmynsfw.com",
  },
  {
    categories: "regional/canada",
    url: "lemmy.ca",
  },
  {
    categories: "regional/other/uk",
    url: "feddit.uk",
  },
  {
    categories: "regional/denmark",
    url: "feddit.dk",
  },
  {
    categories: "regional/other/nz",
    url: "lemmy.nz",
  },
  {
    categories: "regional/australia",
    url: "aussie.zone",
  },
  {
    categories: "regional/germany",
    url: "feddit.de",
  },
  {
    categories: "regional/france",
    url: "jlai.lu",
  },
  {
    categories: "regional/netherlands",
    url: "feddit.nl",
  },
  {
    categories: "regional/italy",
    url: "feddit.it",
  },
  {
    categories: "regional/brazil",
    url: "lemmy.eco.br",
  },
  {
    categories: "regional/other/sweden",
    url: "feddit.nu",
  },
  {
    categories: "regional/malaysia",
    url: "monyet.cc",
  },
  {
    categories: "regional/other/poland",
    url: "szmer.info",
  },
  {
    categories: "regional/other/portugal",
    url: "lemmy.pt",
  },
  {
    categories: "regional/other/midwest",
    url: "midwest.social",
  },
  {
    categories: "general",
    url: "lemmy.world",
  },
  {
    categories: "general",
    url: "lemm.ee",
  },
  {
    categories: "general",
    url: "lemmy.ml",
  },
  {
    categories: "general",
    url: "beehaw.org",
  },
  {
    categories: "general",
    url: "sh.itjust.works",
  },
  {
    categories: "general",
    url: "sopuli.xyz",
  },
  {
    categories: "general",
    url: "reddthat.com",
  },
  {
    categories: "general",
    url: "lemmings.world",
  },
  {
    categories: "general",
    url: "lemmy.thesanewriter.com",
  },
  {
    categories: "social/anarchist",
    url: "lemmy.dbzer0.com",
  },
  {
    categories: "gaming/lifeisstrange",
    url: "pricefield.org",
  },
  {
    categories: "gaming/diyrpg",
    url: "diyrpg.org",
  },
  {
    categories: "gaming/ttrpg",
    url: "ttrpg.network",
  },
  {
    categories: "social/cypherpunk",
    url: "links.hackliberty.org",
  },
  {
    categories: "science/futurology",
    url: "futurology.today",
  },
  {
    categories: "finance/gme",
    url: "lemmy.whynotdrs.org",
  },
];

export default function SiteList() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSite, setSelectedSite] = useState<number>(null);
  const [selectedSites, setSelectedSites] = useState<string[] | null>(null);

  const selectedSiteDetails = useMemo(() => {
    if (selectedSites) {
      return instance_stats.instance_details.find(
        (instance: any) => instance.domain === selectedSites[selectedSite]
      );
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
                  selectedSiteDetails?.site_info.site_view.site.name ??
                  selectedSites[selectedSite]
                }
                description={
                  <Link
                    href={
                      selectedSiteDetails?.site_info.site_view.site.actor_id
                    }
                    size="sm"
                    isExternal
                  >
                    @{selectedSites[selectedSite]}
                  </Link>
                }
                avatarProps={{
                  src: selectedSiteDetails?.site_info.site_view.site.icon,
                }}
              />
            </CardHeader>
            <CardBody className="gap-3">
              <p>
                {selectedSiteDetails?.site_info.site_view.site.description ??
                  "No description provided"}
              </p>
              <div className="flex gap-3 items-center">
                <p className="text-default-500">Admins: </p>
                <div className="justify-start gap-1 flex">
                  {selectedSiteDetails?.site_info.admins.map((admin) => (
                    <Tooltip
                      delay={500}
                      key={admin.person.id}
                      showArrow
                      content={
                        <div>
                          <div className="px-2 py-2">
                            <div className="flex">
                              <Avatar src={admin.person?.avatar} isBordered />
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
                                admin.person?.bio
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
                        src={admin.person.avatar}
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
            <CardFooter className="text-default-400 text-small justify-between flex-wrap gap-3">
              <div className="flex gap-3 flex-wrap">
                <p>
                  {selectedSiteDetails?.site_info.site_view.counts.users} Users
                </p>
                <p>
                  {selectedSiteDetails?.site_info.site_view.counts.communities}{" "}
                  Communities
                </p>
              </div>
              <p>
                {selectedSiteDetails?.node_info.software.name} v
                {selectedSiteDetails?.node_info.software.version}
              </p>
            </CardFooter>
          </Card>
          <div className="flex gap-3">
            <Button
              isExternal
              showAnchorIcon
              href={selectedSiteDetails?.site_info.site_view.site.actor_id}
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
                      instance_stats.instance_details.find(
                        (instance: any) =>
                          instance.domain === selectedSites[randomSite]
                      ) !== undefined &&
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
                if (selectedCategory == "") return !category.categories;
                return category.categories == selectedCategory;
              })
              .map((category) => {
                return (
                  <Button
                    disableRipple
                    key={category.slug}
                    startContent={
                      <div
                        className={`group-hover:transition-all duration-300 delay-75 ease-in-out text-default-600 ${
                          category?.color ?? "group-hover:text-default-500"
                        }`}
                      >
                        {category.icon}
                      </div>
                    }
                    variant="bordered"
                    className="group hover:transition-all hover:scale-110 scale-100 duration-300 ease-in-out delay-75 hover:-translate-y-[0.25em]"
                    onClick={() => {
                      const newCategory = `${
                        category.categories ? `${category.categories}/` : ""
                      }${category.slug}`;

                      const matchingSites = sites.filter(
                        (site) => site.categories === newCategory
                      );

                      if (matchingSites.length > 0) {
                        let i = 0;
                        let randomSite = 0;

                        while (true) {
                          randomSite = Math.floor(
                            Math.random() * matchingSites.length
                          );

                          if (
                            instance_stats.instance_details.find(
                              (instance: any) =>
                                instance.domain ===
                                matchingSites[randomSite].url
                            ) !== undefined
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
                    <p
                      className={`group-hover:transition-all duration-300 delay-75 ease-in-out text-default-600 ${
                        category?.color ?? "group-hover:text-default-500"
                      }`}
                    >
                      {category.name}
                    </p>
                  </Button>
                );
              })}
            {selectedCategory && (
              <Button
                disableRipple
                variant="bordered"
                className="group hover:transition-all hover:scale-110 scale-100 duration-300 ease-in-out delay-75 hover:-translate-y-[0.25em]"
                onClick={() => {
                  const splitString = selectedCategory.split("/");
                  if (splitString.length == 1) setSelectedCategory("");
                  splitString.pop();
                  setSelectedCategory(splitString.join("/"));
                }}
              >
                <p className="group-hover:transition-all duration-300 delay-75 ease-in-out text-default-600 group-hover:text-default-500">
                  Back
                </p>
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
