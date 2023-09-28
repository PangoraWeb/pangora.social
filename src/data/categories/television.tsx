import CodeIcon from "@/icons/CodeIcon";
import ComputerIcon from "@/icons/ComputerIcon";
import MicrochipIcon from "@/icons/MicrochipIcon";
import MoneyIcon from "@/icons/MoneyIcon";
import MovieIcon from "@/icons/MovieIcon";
import PlanetIcon from "@/icons/PlanetIcon";
import RadioIcon from "@/icons/RadioIcon";
import RobotIcon from "@/icons/RobotIcon";

const parent = "television";

const entries = [
  {
    slug: "television-general",
    name: "General Movies & Tv Shows",
    icon: <MovieIcon />,
    color: "neutral",
  },
  {
    slug: "star-trek",
    name: "Star Trek",
    icon: <PlanetIcon />,
    color: "yellow",
  },
];

export default entries.map((entry) => {
  return {
    ...entry,
    parent: parent,
  };
});
