import ComputerIcon from "@/icons/ComputerIcon";
import GamepadIcon from "@/icons/GamepadIcon";
import BaseballIcon from "@/icons/BaseballIcon";
import WorldIcon from "@/icons/WorldIcon";
import MoneyIcon from "@/icons/MoneyIcon";
import LeafIcon from "@/icons/LeafIcon";
import MovieIcon from "@/icons/MovieIcon";
import MessagesIcon from "@/icons/MessagesIcon";
import StopIcon from "@/icons/StopIcon";
import BrushIcon from "@/icons/BrushIcon";
import SunHighIcon from "@/icons/SunHighIcon";

const parent = null;

const entries = [
  {
    slug: "technology",
    name: "Technology",
    icon: <ComputerIcon />,
    color: "teal",
  },
  {
    slug: "gaming",
    name: "Gaming",
    icon: <GamepadIcon />,
    color: "violet",
  },
  {
    slug: "social",
    name: "Social and Community",
    icon: <MessagesIcon />,
    color: "yellow",
  },
  {
    slug: "entertainment",
    name: "Entertainment",
    icon: <MovieIcon />,
    color: "red",
  },
  {
    slug: "science",
    name: "Science and Nature",
    icon: <LeafIcon />,
    color: "green",
  },
  {
    slug: "sports",
    name: "Sports",
    icon: <BaseballIcon />,
    color: "orange",
  },
  {
    slug: "creative",
    name: "Creative Arts",
    icon: <BrushIcon />,
    color: "pink",
  },
  {
    slug: "nsfw",
    name: "NSFW",
    icon: <StopIcon />,
    color: "amber",
  },
  {
    slug: "regional",
    name: "Regional",
    icon: <WorldIcon />,
    color: "emerald",
  },
  {
    slug: "general",
    name: "Everything / Other Topics",
    icon: <SunHighIcon />,
    color: "default",
  },
];

export default entries.map((entry) => {
  return {
    ...entry,
    parent: parent,
  };
});
