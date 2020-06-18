import * as React from "react";

function WebringIcon({ color, size }) {
  return (
    <svg viewBox="0 0 238 214" width={size + "px"} height={size + "px"}>
      <mask id="prefix__a" fill={color}>
        <path fillRule="evenodd" d="M0 0h238v214H0z" />
      </mask>
      <g
        fill="none"
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="square"
        strokeWidth={28}
        mask="url(#prefix__a)"
      >
        <path d="M173.962 167c16.568-28.698 6.736-65.393-21.962-81.962S86.607 78.302 70.038 107l-50 86.603" />
        <path d="M70.038 167c16.569 28.698 53.264 38.53 81.962 21.962s38.53-53.264 21.962-81.962l-50-86.603" />
        <path d="M122 77c-33.137 0-60 26.863-60 60s26.863 60 60 60h100" />
      </g>
    </svg>
  );
}

export default WebringIcon;
