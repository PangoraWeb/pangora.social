import BookIcon from "@/icons/BookIcon";
import BrushIcon from "@/icons/BrushIcon";
import MasksTheaterIcon from "@/icons/MasksTheaterIcon";
import MovieIcon from "@/icons/MovieIcon";
import MusicIcon from "@/icons/MusicIcon";
import PhotoIcon from "@/icons/PhotoIcon";
import UserIcon from "@/icons/UserIcon";

const parent = "creative";

const entries = [
  {
    slug: "creative-general",
    name: "General Creative Arts",
    icon: <UserIcon />,
    color: "neutral",
  },
  {
    slug: "audio",
    name: "Music & Audio Production",
    icon: <MusicIcon />,
    color: "yellow",
  },
  {
    slug: "art",
    name: "Visual Arts",
    icon: <BrushIcon />,
    color: "red",
  },
  {
    slug: "writing",
    name: "Writing & Literature",
    icon: <BookIcon />,
    color: "teal",
  },
  {
    slug: "performing",
    name: "Performing Arts",
    icon: <MasksTheaterIcon />,
    color: "violet",
  },
  {
    slug: "video",
    name: "Film & Video Production",
    icon: <MovieIcon />,
    color: "orange",
  },
  {
    slug: "photography",
    name: "Photography",
    icon: <PhotoIcon />,
    color: "emerald",
  },
];

export default entries.map((entry) => {
  return {
    ...entry,
    parent: parent,
  };
});
