import IconProps from "@/types/IconProps";

export default function MusicIcon({ width = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
      <path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
      <path d="M9 17v-13h10v13"></path>
      <path d="M9 8h10"></path>
    </svg>
  );
}
