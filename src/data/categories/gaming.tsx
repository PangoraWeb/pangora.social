import CardsIcon from "@/icons/CardsIcon";
import GamepadIcon from "@/icons/GamepadIcon";
import PhotoIcon from "@/icons/PhotoIcon";
import PlanetIcon from "@/icons/PlanetIcon";
import ShieldIcon from "@/icons/ShieldIcon";
import SwordsIcon from "@/icons/SwordsIcon";
import WHexagonIcon from "@/icons/WHexagonIcon";

const parent = "gaming";

const entries = [
  {
    slug: "gaming-general",
    name: "General Gaming",
    icon: <GamepadIcon />,
    color: "neutral",
  },
  {
    slug: "star-citizen",
    name: "Star Citizen",
    icon: <PlanetIcon />,
    color: "violet",
  },
  {
    slug: "magic-the-gathering",
    name: "Magic: The Gathering",
    icon: <CardsIcon />,
    color: "orange",
  },
  {
    slug: "life-is-strange",
    name: "Life is Strange",
    icon: <PhotoIcon />,
    color: "pink",
  },
  {
    slug: "diyrpg",
    name: "DIYRPG",
    icon: <SwordsIcon />,
    color: "amber",
  },
  {
    slug: "ttrpg",
    name: "TTRPG",
    icon: <ShieldIcon />,
    color: "red",
  },
  {
    slug: "warframe",
    name: "Warframe",
    icon: <WHexagonIcon />,
    color: "blue",
  },
  {
    slug: "soulframe",
    name: "Soulframe",
    icon: <WHexagonIcon />,
    color: "amber",
  },
  {
    slug: "starfield",
    name: "Starfield",
    icon: <WHexagonIcon />,
    color: "indigo",
  },
];

export default entries.map((entry) => {
  return {
    ...entry,
    parent: parent,
  };
});
