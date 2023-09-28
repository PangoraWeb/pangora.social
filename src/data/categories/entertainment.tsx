import BookIcon from "@/icons/BookIcon";
import MovieIcon from "@/icons/MovieIcon";
import SkullIcon from "@/icons/SkullIcon";
import TvIcon from "@/icons/TvIcon";

const parent = "entertainment";

const entries = [
  {
    slug: "entertainment-general",
    name: "General Entertainment",
    icon: <TvIcon />,
    color: "neutral",
  },
  {
    slug: "television",
    name: "Movies & TV Shows",
    icon: <MovieIcon />,
    color: "orange",
  },
  {
    slug: "literature",
    name: "Literature",
    icon: <BookIcon />,
    color: "teal",
  },
  {
    slug: "anime",
    name: "Anime",
    icon: <TvIcon />,
    color: "red",
  },
  {
    slug: "piracy",
    name: "Piracy",
    icon: <SkullIcon />,
    color: "violet",
  },
];

export default entries.map((entry) => {
  return {
    ...entry,
    parent: parent,
  };
});
