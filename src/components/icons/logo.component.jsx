import * as React from "react";

function Logo({ size, color, weight }) {
  return (
    <svg viewBox="0 0 50 50" width={size + "px"} height={size + "px"}>
      <defs />
      <path
        fill={color}
        fillRule="nonzero"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight}
        d="M7 40.375L26 9.5M7 40.375L26 9.5l19 30.875L7 23.75l38 16.625L7 23.75l38 16.625L26 9.5 7 40.375 26 9.5m19 30.875L26 9.5"
      />
    </svg>
  );
}

export default Logo;
