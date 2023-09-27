import IconProps from "@/types/IconProps";

export default function RobotIcon({ width = 24 }: IconProps) {
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
      <path d="M7 7h10a2 2 0 0 1 2 2v1l1 1v3l-1 1v3a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-3l-1 -1v-3l1 -1v-1a2 2 0 0 1 2 -2z"></path>
      <path d="M10 16h4"></path>
      <circle cx="8.5" cy="11.5" r=".5" fill="currentColor"></circle>
      <circle cx="15.5" cy="11.5" r=".5" fill="currentColor"></circle>
      <path d="M9 7l-1 -4"></path>
      <path d="M15 7l1 -4"></path>
    </svg>
  );
}
