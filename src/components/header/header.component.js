import Link from "next/link";

export default function Header({ color, width }) {
  return (
    <header>
      <a href="https://arvdsn.co">
        <svg
          stroke={color}
          width={width}
          strokeWidth="20"
          strokeLinejoin="round"
          viewBox="30 30 270 220"
        >
          <path d="M45,240 L45,240 L165,45 M45,240 L45,240 L165,45 L165,45 L285,240 L285,240 L45,135 L285,240 L285,240 L45,135 L285,240 L165,45 L45,240 L45,240 L165,45 M45,240 Z M285,240 L285,240 L165,45"></path>
        </svg>
      </a>
    </header>
  );
}
