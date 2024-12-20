import React from "react";

function ManageSvg({ current, isHovered }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8333 24.5H8.16665C3.49998 24.5 2.33331 23.3333 2.33331 18.6667V9.33333C2.33331 4.66667 3.49998 3.5 8.16665 3.5H19.8333C24.5 3.5 25.6666 4.66667 25.6666 9.33333V18.6667C25.6666 23.3333 24.5 24.5 19.8333 24.5Z"
        stroke={current || isHovered ? "#3E9E6C" : "#676767"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3333 9.33337H22.1666"
        stroke={current || isHovered ? "#3E9E6C" : "#676767"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 14H22.1667"
        stroke={current || isHovered ? "#3E9E6C" : "#676767"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.8333 18.6666H22.1666"
        stroke={current || isHovered ? "#3E9E6C" : "#676767"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.91715 13.1716C11.0834 13.1716 12.0288 12.2261 12.0288 11.0599C12.0288 9.89367 11.0834 8.94824 9.91715 8.94824C8.75091 8.94824 7.80548 9.89367 7.80548 11.0599C7.80548 12.2261 8.75091 13.1716 9.91715 13.1716Z"
        stroke={current || isHovered ? "#3E9E6C" : "#676767"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 19.0514C13.8366 17.3598 12.495 16.0298 10.8033 15.8781C10.22 15.8198 9.62498 15.8198 9.02998 15.8781C7.33831 16.0414 5.99665 17.3598 5.83331 19.0514"
        stroke={current || isHovered ? "#3E9E6C" : "#676767"}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ManageSvg;
