import React from "react";

function SetupSvg({ current, isHovered }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.7591 4.41397C26.7415 4.38242 26.717 4.35086 26.689 4.32632C26.5137 4.15102 26.2297 4.15102 26.0545 4.32632L20.0145 10.3671L17.6342 7.98654L23.6777 1.94227C23.7058 1.91422 23.7268 1.88618 23.7478 1.85462C23.874 1.64076 23.8039 1.36729 23.5901 1.24108C20.1477 -0.792376 15.6396 -0.326084 12.6774 2.63294C10.3287 4.98194 9.55048 8.3126 10.3462 11.3067L0.0750651 21.5791C-0.0301004 21.6843 -0.0230895 21.8561 0.0855815 21.9648L6.03445 27.9144C6.14312 28.0231 6.31839 28.0301 6.42005 27.9249L16.6877 17.656C19.6849 18.4553 23.0152 17.6805 25.3674 15.328C28.326 12.3655 28.7923 7.85682 26.7591 4.41397ZM23.5831 13.54C21.5464 15.5769 18.4896 15.9696 16.0602 14.718L15.7517 15.0265L15.7482 15.023L6.14312 24.6328L3.36675 21.8561L11.4329 13.7889C11.4329 13.7889 11.4329 13.7924 11.4365 13.7924L13.2874 11.9413C12.0359 9.51163 12.4285 6.45444 14.4652 4.41748C15.1221 3.75993 15.9132 3.25194 16.7844 2.92823C17.6556 2.60451 18.5864 2.4727 19.5132 2.54179L14.8543 7.1977C14.6439 7.40839 14.5257 7.69401 14.5257 7.9918C14.5257 8.28959 14.6439 8.57521 14.8543 8.7859L19.2187 13.1508C19.4294 13.3613 19.715 13.4795 20.0127 13.4795C20.3105 13.4795 20.596 13.3613 20.8067 13.1508L25.462 8.49491C25.5917 10.311 24.9572 12.1692 23.5831 13.54Z"
        fill={current || isHovered ? "#3E9E6C" : "#676767"}
      />
    </svg>
  );
}

export default SetupSvg;