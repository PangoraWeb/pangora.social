import CodeIcon from "@/icons/CodeIcon";
import GamepadIcon from "@/icons/GamepadIcon";
import WorldIcon from "@/icons/WorldIcon";

const parent = "programming";

const entries = [
  {
    slug: "programming-general",
    name: "General Programming",
    icon: <CodeIcon />,
    color: "neutral",
  },
  {
    slug: "webdev",
    name: "Web Development",
    icon: <WorldIcon />,
    color: "green",
  },
  {
    slug: "gamedev",
    name: "Game Development",
    icon: <GamepadIcon />,
    color: "teal",
  },
];

export default entries.map((entry) => {
  return {
    ...entry,
    parent: parent,
  };
});
