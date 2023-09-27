import IconProps from "@/types/IconProps";

export default function LeafIcon({ width = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-3.5 -1 24 24"
      width={width}
      fill="currentColor"
    >
      <path d="M3.572 7.572a5 5 0 1 0 8.29 5.592c1.005-1.489 1.738-4.816 2.085-9.85C8.004 4.7 4.484 6.221 3.572 7.571zm.231 8.6a7 7 0 0 1-1.889-9.718C3.356 4.317 8.08 2.433 16.084.801c-.268 6.851-1.122 11.345-2.563 13.482a7 7 0 0 1-9.718 1.889z"></path>
      <path d="M2.066 20.07a1 1 0 1 1-2 0c0-3.465 1.7-6.711 4.55-8.685l.507-.352a1 1 0 0 1 1.139 1.644l-.507.352a8.567 8.567 0 0 0-3.689 7.042z"></path>
    </svg>
  );
}
