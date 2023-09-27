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
import { useState } from "react";
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
    slug: "general",
    name: "Everything / Other Topics",
    icon: <WorldIcon />,
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
    color: "group-hover:text-red-500",
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
    categories: "general",
    slug: "australia",
    name: "Australia",
    icon: <AustraliaIcon />,
    color: "group-hover:text-yellow-500",
  },
  {
    categories: "general",
    slug: "brazil",
    name: "Brazil",
    icon: <BrazilIcon />,
    color: "group-hover:text-green-500",
  },
  {
    categories: "general",
    slug: "canada",
    name: "Canada",
    icon: <CanadaIcon />,
    color: "group-hover:text-red-500",
  },
  {
    categories: "general",
    slug: "denmark",
    name: "Denmark",
    icon: <DenmarkIcon />,
    color: "group-hover:text-red-500",
  },
  {
    categories: "general",
    slug: "france",
    name: "France",
    icon: <FranceIcon />,
    color: "group-hover:text-blue-500",
  },
  {
    categories: "general",
    slug: "germany",
    name: "Germany",
    icon: <GermanyIcon />,
    color: "group-hover:text-yellow-500",
  },
  {
    categories: "general",
    slug: "italy",
    name: "Italy",
    icon: <ItalyIcon />,
    color: "group-hover:text-green-500",
  },
  {
    categories: "general",
    slug: "malaysia",
    name: "Malaysia",
    icon: <MalaysiaIcon />,
    color: "group-hover:text-amber-500",
  },
  {
    categories: "general",
    slug: "netherlands",
    name: "Netherlands",
    icon: <NetherlandsIcon />,
    color: "group-hover:text-orange-500",
  },
  {
    categories: "general/other",
    slug: "nz",
    name: "New Zealand",
    icon: <NZIcon />,
    color: "group-hover:text-lime-500",
  },
  {
    categories: "general/other",
    slug: "poland",
    name: "Poland",
    icon: <PolandIcon />,
    color: "group-hover:text-red-500",
  },
  {
    categories: "general/other",
    slug: "sweden",
    name: "Sweden",
    icon: <SwedenIcon />,
    color: "group-hover:text-yellow-500",
  },
  {
    categories: "general/other",
    slug: "uk",
    name: "United Kingdom",
    icon: <UKIcon />,
    color: "group-hover:text-sky-500",
  },
  {
    categories: "general/other",
    slug: "midwest",
    name: "Midwest USA",
    icon: <USAIcon />,
    color: "group-hover:text-blue-500",
  },
  {
    categories: "general",
    slug: "other",
    name: "Other",
    icon: <WorldIcon />,
    color: "group-hover:text-default-500",
  },
  {
    categories: "general/other",
    slug: "general",
    name: "All / Other",
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
    categories: "general/canada",
    url: "lemmy.ca",
  },
  {
    categories: "general/other/uk",
    url: "feddit.uk",
  },
  {
    categories: "general/denmark",
    url: "feddit.dk",
  },
  {
    categories: "general/other/nz",
    url: "lemmy.nz",
  },
  {
    categories: "general/australia",
    url: "aussie.zone",
  },
  {
    categories: "general/germany",
    url: "feddit.de",
  },
  {
    categories: "general/france",
    url: "jlai.lu",
  },
  {
    categories: "general/netherlands",
    url: "feddit.nl",
  },
  {
    categories: "general/italy",
    url: "feddit.it",
  },
  {
    categories: "general/brazil",
    url: "lemmy.eco.br",
  },
  {
    categories: "general/other/sweden",
    url: "feddit.nu",
  },
  {
    categories: "general/malaysia",
    url: "monyet.cc",
  },
  {
    categories: "general/other/poland",
    url: "szmer.info",
  },
  {
    categories: "general/other/midwest",
    url: "midwest.social",
  },
  {
    categories: "general/other/general",
    url: "lemmy.world",
  },
  {
    categories: "general/other/general",
    url: "lemm.ee",
  },
  {
    categories: "general/other/general",
    url: "lemmy.ml",
  },
  {
    categories: "general/other/general",
    url: "beehaw.org",
  },
  {
    categories: "general/other/general",
    url: "sh.itjust.works",
  },
  {
    categories: "general/other/general",
    url: "sopuli.xyz",
  },
  {
    categories: "general/other/general",
    url: "reddthat.com",
  },
  {
    categories: "general/other/general",
    url: "lemmings.world",
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

  return (
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
                  window.location.href = `https://${
                    matchingSites[
                      Math.floor(Math.random() * matchingSites.length)
                    ].url
                  }`;
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
  );
}
