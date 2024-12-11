import React from "react";

function DashboardSvg({ current, isHovered }) {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.79726 26.9501H5.01142C2.63034 26.9501 1.48126 25.8484 1.48126 23.5739V4.85699C1.48126 2.58253 2.64219 1.48083 5.01142 1.48083H9.79726C12.1783 1.48083 13.3274 2.58253 13.3274 4.85699V23.5739C13.3274 25.8484 12.1665 26.9501 9.79726 26.9501ZM5.01142 3.25776C3.50695 3.25776 3.25819 3.66053 3.25819 4.85699V23.5739C3.25819 24.7704 3.50695 25.1731 5.01142 25.1731H9.79726C11.3017 25.1731 11.5505 24.7704 11.5505 23.5739V4.85699C11.5505 3.66053 11.3017 3.25776 9.79726 3.25776H5.01142Z"
        fill={current || isHovered ? "#3E9E6C" : "#676767"}
      />
      <path
        d="M23.4197 16.2885H18.6339C16.2528 16.2885 15.1037 15.1868 15.1037 12.9124V4.85699C15.1037 2.58253 16.2646 1.48083 18.6339 1.48083H23.4197C25.8008 1.48083 26.9499 2.58253 26.9499 4.85699V12.9124C26.9499 15.1868 25.7889 16.2885 23.4197 16.2885ZM18.6339 3.25776C17.1294 3.25776 16.8806 3.66053 16.8806 4.85699V12.9124C16.8806 14.1088 17.1294 14.5116 18.6339 14.5116H23.4197C24.9242 14.5116 25.1729 14.1088 25.1729 12.9124V4.85699C25.1729 3.66053 24.9242 3.25776 23.4197 3.25776H18.6339Z"
        fill={current || isHovered ? "#3E9E6C" : "#676767"}
      />
      <path
        d="M23.4197 26.9496H18.6339C16.2528 26.9496 15.1037 25.8479 15.1037 23.5734V21.4411C15.1037 19.1666 16.2646 18.0649 18.6339 18.0649H23.4197C25.8008 18.0649 26.9499 19.1666 26.9499 21.4411V23.5734C26.9499 25.8479 25.7889 26.9496 23.4197 26.9496ZM18.6339 19.8419C17.1294 19.8419 16.8806 20.2446 16.8806 21.4411V23.5734C16.8806 24.7699 17.1294 25.1726 18.6339 25.1726H23.4197C24.9242 25.1726 25.1729 24.7699 25.1729 23.5734V21.4411C25.1729 20.2446 24.9242 19.8419 23.4197 19.8419H18.6339Z"
        fill={current || isHovered ? "#3E9E6C" : "#676767"}
      />
    </svg>
  );
}

export default DashboardSvg;