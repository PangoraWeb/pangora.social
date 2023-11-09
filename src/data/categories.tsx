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
import { WhitelistEntry } from "./whitelist";

const categories = [
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

export default categories;

export function hasChildrenCategories(parent: string | null) {
  return getChildrenCategories(parent).length !== 0;
}

export function getChildrenCategories(
  parent: string | null,
  whitelist?: WhitelistEntry[]
): (
  | {
      parent: null;
      slug: string;
      name: string;
      icon: JSX.Element;
      color: string;
    }
  | {
      parent: string;
      slug: string;
      name: string;
      icon: JSX.Element;
      color: string;
    }
)[] {
  if (whitelist) {
    return categories.filter((category) => {
      if (category.parent !== parent) return false;

      const matchingSites = whitelist.filter((site) =>
        site.tags.includes(category.slug)
      );

      const childCategories = getChildrenCategories(category.slug, whitelist);

      return matchingSites.length !== 0 || childCategories.length !== 0;
    });
  }

  return categories.filter((category) => {
    return category.parent == parent;
  });
}

export function getTags() {
  return categories.filter((category) => {
    return !hasChildrenCategories(category.slug);
  });
}

export function getTag(name: string) {
  return categories.find((category) => {
    return category.slug == name;
  });
}

export function convertBaseColor(color: string) {
  switch (color) {
    case "green":
      return "text-green-500";
    case "lime":
      return "text-lime-500";
    case "blue":
      return "text-blue-500";
    case "teal":
      return "text-teal-500";
    case "violet":
      return "text-violet-500";
    case "pink":
      return "text-pink-500";
    case "rose":
      return "text-rose-500";
    case "yellow":
      return "text-yellow-500";
    case "orange":
      return "text-orange-500";
    case "amber":
      return "text-amber-500";
    case "indigo":
      return "text-indigo-500";
    case "red":
      return "text-red-500";
    case "emerald":
      return "text-emerald-500";
    case "cyan":
      return "text-cyan-500";
    case "sky":
      return "text-sky-500";
    case "purple":
      return "text-purple-500";
    case "fuchsia":
      return "text-fuchsia-500";
    case "neutral":
      return "text-default-500";
  }
}

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
    case "neutral":
      return "group-hover:text-default-500";
  }
}
