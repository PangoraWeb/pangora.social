import CodeIcon from "@/icons/CodeIcon";
import ComputerIcon from "@/icons/ComputerIcon";
import MicrochipIcon from "@/icons/MicrochipIcon";
import MoneyIcon from "@/icons/MoneyIcon";
import RadioIcon from "@/icons/RadioIcon";
import RobotIcon from "@/icons/RobotIcon";

const parent = "technology";

const entries = [
  {
    slug: "technology-general",
    name: "General Technology",
    icon: <ComputerIcon />,
    color: "neutral",
  },
  {
    slug: "programming",
    name: "Programming & Development",
    icon: <CodeIcon />,
    color: "teal",
  },
  {
    slug: "ai",
    name: "Artificial Intelligence",
    icon: <RobotIcon />,
    color: "violet",
  },
  {
    slug: "radio",
    name: "Radio",
    icon: <RadioIcon />,
    color: "amber",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    icon: <MicrochipIcon />,
    color: "red",
  },
  {
    slug: "cryptocurrency",
    name: "Blockchain & Cryptocurrency",
    icon: <MoneyIcon />,
    color: "green",
  },
];

export default entries.map((entry) => {
  return {
    ...entry,
    parent: parent,
  };
});
