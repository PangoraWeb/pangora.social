import creative from "./categories/creative";
import cryptocurrency from "./categories/cryptocurrency";
import entertainment from "./categories/entertainment";
import gaming from "./categories/gaming";
import main from "./categories/main";
import programming from "./categories/programming";
import regional from "./categories/regional";
import science from "./categories/science";
import social from "./categories/social";
import technology from "./categories/technology";
import television from "./categories/television";

export default [
  ...main,
  ...technology,
  ...programming,
  ...creative,
  ...cryptocurrency,
  ...entertainment,
  ...gaming,
  ...science,
  ...television,
  ...social,
  ...regional,
];

export function convertColor(color: string) {
  switch (color) {
    case "green":
      return "group-hover:text-green-500";
    case "lime":
      return "group-hover:text-lime-500";
    case "blue":
      return "group-hover:text-blue-500";
    case "teal":
      return "group-hover:text-teal-500";
    case "violet":
      return "group-hover:text-violet-500";
    case "pink":
      return "group-hover:text-pink-500";
    case "rose":
      return "group-hover:text-rose-500";
    case "yellow":
      return "group-hover:text-yellow-500";
    case "orange":
      return "group-hover:text-orange-500";
    case "amber":
      return "group-hover:text-amber-500";
    case "indigo":
      return "group-hover:text-indigo-500";
    case "red":
      return "group-hover:text-red-500";
    case "emerald":
      return "group-hover:text-emerald-500";
    case "cyan":
      return "group-hover:text-cyan-500";
    case "sky":
      return "group-hover:text-sky-500";
    case "purple":
      return "group-hover:text-purple-500";
    case "fuchsia":
      return "group-hover:text-fuchsia-500";
    case "default":
      return "group-hover:text-default-500";
  }
}
