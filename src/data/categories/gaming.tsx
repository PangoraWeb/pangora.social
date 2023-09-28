import CardsIcon from "@/icons/CardsIcon";
import GamepadIcon from "@/icons/GamepadIcon";
import PhotoIcon from "@/icons/PhotoIcon";
import PlanetIcon from "@/icons/PlanetIcon";
import SHexagonIcon from "@/icons/SHexagonIcon";
import ShieldIcon from "@/icons/ShieldIcon";
import StarsIcon from "@/icons/StarsIcon";
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
    icon: <SHexagonIcon />,
    color: "amber",
  },
  {
    slug: "starfield",
    name: "Starfield",
    icon: <StarsIcon />,
    color: "indigo",
  },
];

export default entries.map((entry) => {
  return {
    ...entry,
    parent: parent,
  };
});
