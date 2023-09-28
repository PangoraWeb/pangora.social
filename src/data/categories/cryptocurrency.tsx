import MoneyIcon from "@/icons/MoneyIcon";

const parent = "cryptocurrency";

const entries = [
  {
    slug: "monero",
    name: "Monero",
    icon: <MoneyIcon />,
    color: "orange",
  },
  {
    slug: "gme",
    name: "Gme",
    icon: <MoneyIcon />,
    color: "red",
  },
];

export default entries.map((entry) => {
  return {
    ...entry,
    parent: parent,
  };
});
