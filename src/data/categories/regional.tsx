import AustraliaIcon from "@/icons/AustraliaIcon";
import BrazilIcon from "@/icons/BrazilIcon";
import CanadaIcon from "@/icons/CanadaIcon";
import DenmarkIcon from "@/icons/DenmarkIcon";
import FranceIcon from "@/icons/FranceIcon";
import GermanyIcon from "@/icons/GermanyIcon";
import ItalyIcon from "@/icons/ItalyIcon";
import MalaysiaIcon from "@/icons/MalaysiaIcon";
import MoneyIcon from "@/icons/MoneyIcon";
import NZIcon from "@/icons/NZIcon";
import NetherlandsIcon from "@/icons/NetherlandsIcon";
import PolandIcon from "@/icons/PolandIcon";
import PortugalIcon from "@/icons/PortugalIcon";
import SwedenIcon from "@/icons/SwedenIcon";
import UKIcon from "@/icons/UKIcon";
import USAIcon from "@/icons/USAIcon";
import WorldIcon from "@/icons/WorldIcon";

const parent = "regional";

const entries = [
  {
    slug: "australia",
    name: "Australia",
    icon: <AustraliaIcon />,
    color: "yellow",
  },
  {
    slug: "brazil",
    name: "Brazil",
    icon: <BrazilIcon />,
    color: "green",
  },
  {
    slug: "canada",
    name: "Canada",
    icon: <CanadaIcon />,
    color: "red",
  },
  {
    slug: "denmark",
    name: "Denmark",
    icon: <DenmarkIcon />,
    color: "red",
  },
  {
    slug: "france",
    name: "France",
    icon: <FranceIcon />,
    color: "blue",
  },
  {
    slug: "germany",
    name: "Germany",
    icon: <GermanyIcon />,
    color: "yellow",
  },
  {
    slug: "italy",
    name: "Italy",
    icon: <ItalyIcon />,
    color: "green",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    icon: <MalaysiaIcon />,
    color: "amber",
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    icon: <NetherlandsIcon />,
    color: "orange",
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    icon: <NZIcon />,
    color: "lime",
  },
  {
    slug: "poland",
    name: "Poland",
    icon: <PolandIcon />,
    color: "red",
  },
  {
    slug: "portugal",
    name: "Portugal",
    icon: <PortugalIcon />,
    color: "green",
  },
  {
    slug: "sweden",
    name: "Sweden",
    icon: <SwedenIcon />,
    color: "yellow",
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    icon: <UKIcon />,
    color: "sky",
  },
  {
    slug: "midwest",
    name: "Midwest USA",
    icon: <USAIcon />,
    color: "blue",
  },
];

export default entries.map((entry) => {
  return {
    ...entry,
    parent: parent,
  };
});
