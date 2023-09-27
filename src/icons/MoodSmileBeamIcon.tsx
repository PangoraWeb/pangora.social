import IconProps from "@/types/IconProps";

export default function MoodSmileBeamIcon({ width = 24 }: IconProps) {
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
      <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z"></path>
      <path d="M10 10c-.5 -1 -2.5 -1 -3 0"></path>
      <path d="M17 10c-.5 -1 -2.5 -1 -3 0"></path>
      <path d="M14.5 15a3.5 3.5 0 0 1 -5 0"></path>
    </svg>
  );
}
