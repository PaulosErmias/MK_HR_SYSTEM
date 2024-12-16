import { useState } from "react";
import {
  AttendanceSvg,
  DashboardSvg,
  DepartmentSvg,
  LeaveSvg,
  ManageSvg,
  PayrollSvg,
  ProfileSvg,
  ReportSvg,
  SearchSvg,
  SetUpSvg,
  SettingSvg,
  TrainingSvg,
  VacancySvg,
} from "../../assets/icons";

import AccountProfile from "./AccountProfile";

const navigation = [
  {
    name: "Dashboard",
    href: "#",
    icon: DashboardSvg,
    current: true,
  },
  {
    name: "Setup",
    href: "#",
    icon: SetUpSvg,
    current: false,
  },
  {
    name: "Manage Employee",
    href: "#",
    icon: ManageSvg,
    current: false,
  },
  {
    name: "Departments",
    href: "#",
    icon: DepartmentSvg,
    current: false,
  },

  {
    name: "Attendance",
    href: "#",
    icon: AttendanceSvg,
    current: false,
  },
  {
    name: "Training",
    href: "#",
    icon: TrainingSvg,
    current: false,
  },
  {
    name: "Leave",
    href: "#",
    icon: LeaveSvg,
    current: false,
  },
  {
    name: "Payroll",
    href: "#",
    icon: PayrollSvg,
    current: false,
  },
  {
    name: "Vacancy",
    href: "#",
    icon: VacancySvg,
    current: false,
  },
  {
    name: "Report",
    href: "#",
    icon: ReportSvg,
    current: false,
  },
  {
    name: "Profile",
    href: "#",
    icon: ProfileSvg,
    current: false,
  },
  {
    name: "Setting",
    href: "#",
    icon: SettingSvg,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SideBar() {
  return (
    <div className="shadow-2xl border-[#E8E8E8] bg-white w-70 h-full">
      <div className="flex flex-col  pb-5">
        <div className="flex h-24 shrink-0 items-start pt-4">
          <AccountProfile />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="">
            {navigation.map((item, index) => (
              <SideBarEl item={item} index={index} key={item.name} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

function SideBarEl({ item, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li
      key={item.name}
      className={classNames(
        index === 4 || index === 8 ? "border-b-2 border-dotted pb-3" : "",
        index === 5 || index === 9 ? "pt-2" : ""
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={classNames(
          item.current ? " bg-[#E8E8E8]" : "",
          "hover:bg-[#E8E8E8] overflow-hidden py-[10px]"
        )}
      >
        <a
          href={item.href}
          className={classNames(
            item.current || isHovered
              ? "border-l-4 border-primary text-primary"
              : "text-gray-700 hover:text-primary",
            "pl-6 group flex gap-x-3 text-sm font-semibold leading-6 items-center"
          )}
        >
          {/* <img
        src={item.icon}
        aria-hidden="true"
        className={classNames(
          item.current
            ? "text-primary"
            : "text-gray-400 hover:bg-primary group-hover:text-primary",
          "h-6 w-6 shrink-0"
        )}
      /> */}
          <item.icon current={item.current} isHovered={isHovered} />
          <p
            className={classNames(
              item.current || isHovered ? "text-primary" : "",
              "text-base"
            )}
          >
            {item.name}
          </p>
        </a>
      </div>
    </li>
  );
}
