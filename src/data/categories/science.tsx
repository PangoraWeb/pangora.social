import ClockHour2Icon from "@/icons/ClockHour2Icon";
import LeafIcon from "@/icons/LeafIcon";
import SunHighIcon from "@/icons/SunHighIcon";

const parent = "science";

const entries = [
  {
    slug: "science-general",
    name: "General Science & Nature",
    icon: <LeafIcon />,
    color: "neutral",
  },
  {
    slug: "solarpunk",
    name: "Solarpunk",
    icon: <SunHighIcon />,
    color: "green",
  },
  {
    slug: "futurology",
    name: "Futurology",
    icon: <ClockHour2Icon />,
    color: "teal",
  },
];

export default entries.map((entry) => {
  return {
    ...entry,
    parent: parent,
  };
});
