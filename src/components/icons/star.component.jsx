import * as React from "react";

function StarIcon({ size, color }) {
  return (
    <svg viewBox="0 0 12 12" width={size + "px"} height={size + "px"}>
      <path
        fill={color}
        d="M11.572 4.27l-3.54-.514L6.448.548a.521.521 0 00-.9 0l-1.58 3.208-3.54.514a.5.5 0 00-.277.853l2.562 2.5-.606 3.526a.5.5 0 00.726.527L6 10.008l3.167 1.665a.488.488 0 00.232.057.5.5 0 00.494-.584L9.287 7.62l2.562-2.5a.5.5 0 00-.277-.853z"
      />
    </svg>
  );
}

export default StarIcon;
