import React from "react";

function SortSvg({ direction = "asc" }) {
  // console.log(direction);
  const icon =
    direction === "asc" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="18"
        height="18"
      >
        <path d="M32 50L2 20 62 20z" fill="#0E381F" />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="18"
        height="18"
      >
        <path d="M32 14L2 44 62 44z" fill="#0E381F" />
      </svg>
    );

  return icon;
}

export default SortSvg;
