import ACircleIcon from "@/icons/ACircleIcon";
import AccessibleIcon from "@/icons/AccessibleIcon";
import CompassIcon from "@/icons/CompassIcon";
import FlagIcon from "@/icons/FlagIcon";
import HammerIcon from "@/icons/HammerIcon";
import InfinityIcon from "@/icons/InfinityIcon";
import MoodSmileBeamIcon from "@/icons/MoodSmileBeamIcon";
import PawIcon from "@/icons/PawIcon";
import SkullIcon from "@/icons/SkullIcon";

const parent = "social";

const entries = [
  {
    slug: "lgbtq",
    name: "LGBTQ+",
    icon: <FlagIcon />,
    color: "pink",
  },
  {
    slug: "furry",
    name: "Furry",
    icon: <PawIcon />,
    color: "teal",
  },
  {
    slug: "anarchist",
    name: "Anarchist",
    icon: <ACircleIcon />,
    color: "red",
  },
  {
    slug: "blind",
    name: "Blind",
    icon: <AccessibleIcon />,
    color: "fuchsia",
  },
  {
    slug: "neurodivergence",
    name: "Neurodivergence",
    icon: <InfinityIcon />,
    color: "lime",
  },
  {
    slug: "cypherpunk",
    name: "CypherPunk",
    icon: <SkullIcon />,
    color: "violet",
  },
  {
    slug: "political-compass",
    name: "Political Compass",
    icon: <CompassIcon />,
    color: "blue",
  },
  {
    slug: "memes",
    name: "Memes",
    icon: <MoodSmileBeamIcon />,
    color: "green",
  },
];

export default entries.map((entry) => {
  return {
    ...entry,
    parent: parent,
  };
});
