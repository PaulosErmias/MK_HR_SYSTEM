import { useState } from "react";
import { FilterSortSvg, SortSvg } from "../../assets/icons";

const people = [
  {
    EMP_NAME: "Abebe Kebede",
    DEPT: "Software Development",
    AGE: "22",
    MOBILE: "0909156085",
    EMP_DATE: "10/10/2022",
    STATUS: "Active",
    id: "0001",
  },
  {
    EMP_NAME: "Abebech Kebede",
    DEPT: "Finance",
    AGE: "24",
    MOBILE: "0912312121",
    EMP_DATE: "09/07/2021",
    STATUS: "Active",
    id: "0002",
  },
  {
    EMP_NAME: "Abeba Kebede",
    DEPT: "Software Development",
    AGE: "25",
    MOBILE: "0921221343",
    EMP_DATE: "05/08/2023",
    STATUS: "Active",
    id: "0003",
  },
  {
    EMP_NAME: "Abebe Kebede",
    DEPT: "Software Development",
    AGE: "22",
    MOBILE: "0909156085",
    EMP_DATE: "10/10/2022",
    STATUS: "Active",
    id: "0004",
  },
  {
    EMP_NAME: "Abebech Kebede",
    DEPT: "Finance",
    AGE: "24",
    MOBILE: "0912312121",
    EMP_DATE: "09/07/2021",
    STATUS: "Active",
    id: "0005",
  },
  {
    EMP_NAME: "Abeba Kebede",
    DEPT: "Software Development",
    AGE: "25",
    MOBILE: "0921221343",
    EMP_DATE: "05/08/2023",
    STATUS: "Active",
    id: "0006",
  },
  {
    EMP_NAME: "Abebe Kebede",
    DEPT: "Software Development",
    AGE: "22",
    MOBILE: "0909156085",
    EMP_DATE: "10/10/2022",
    STATUS: "Active",
    id: "0007",
  },
  {
    EMP_NAME: "Abebech Kebede",
    DEPT: "Finance",
    AGE: "24",
    MOBILE: "0912312121",
    EMP_DATE: "09/07/2021",
    STATUS: "Active",
    id: "0008",
  },
  {
    EMP_NAME: "Abeba Kebede",
    DEPT: "Software Development",
    AGE: "25",
    MOBILE: "0921221343",
    EMP_DATE: "05/08/2023",
    STATUS: "Active",
    id: "0009",
  },
  // More people...
];
const headers = [
  { id: "1", key: "EMP_NAME", label: "Employee Name" },
  { id: "2", key: "DEPT", label: "Department" },
  { id: "3", key: "AGE", label: "Age" },
  { id: "4", key: "MOBILE", label: "Mobile" },
  { id: "5", key: "EMP_DATE", label: "Employee Date" },
  { id: "6", key: "STATUS", label: "Status" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Table() {
  const [sort, setSort] = useState({ sortedKey: "EMP_NAME", drxn: "asc" });

  function handleHeaderClick(header) {
    setSort({
      sortedKey: header.key,
      drxn:
        sort.sortedKey === header.key
          ? sort.drxn === "asc"
            ? "desc"
            : "asc"
          : "desc",
    });
  }

  function getSortedArray(arr) {
    if (sort.drxn === "asc") {
      return arr.sort((a, b) =>
        a[sort.sortedKey] > b[sort.sortedKey] ? 1 : -1
      );
    }
    return arr.sort((a, b) => (a[sort.sortedKey] > b[sort.sortedKey] ? -1 : 1));
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 rounded-md">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto items-center justify-center">
          <h1 className="text-base text-gray-900 font-bold mt-2">
            Employee Status
          </h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none bg-slate-lght px-2  rounded-lg">
          <button
            type="button"
            className="w-32 font-bold py-1 text-sm text-orange-lght flex gap-2 items-center justify-center"
          >
            Filter & Sort{" "}
            <span>
              <FilterSortSvg />
            </span>
          </button>
        </div>
      </div>
      <div className="mt-4 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full pt-2 align-middle">
            <table className="min-w-full border-separate border-spacing-0">
              <thead className="z-50">
                <tr>
                  {headers.map((header, i) => (
                    <th
                      scope="col"
                      className={classNames(
                        "sticky top-0 border-b border-gray-300 bg-gray-lght py-3.5 px-3 text-left text-sm font-bold text-green-dark cursor-pointer",
                        i === 0 && "sm:pl-6 lg:pl-8",
                        i === 1 && "sm:table-cell",
                        i === 2 && "lg:table-cell"
                      )}
                      key={header.id}
                      onClick={() => handleHeaderClick(header)}
                    >
                      <div className="flex items-center gap-2 w-full">
                        {header.label}
                        <span
                          className={classNames(
                            `${
                              sort.sortedKey === header.key
                                ? "opacity-100"
                                : "opacity-0"
                            }`
                          )}
                        >
                          <SortSvg direction={sort.drxn} />
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="-z-50">
                {getSortedArray(people).map((person, personIdx) => (
                  <tr key={person.id}>
                    <td className="whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                      {person.EMP_NAME}
                    </td>
                    <td className=" whitespace-nowrap px-3 py-3 text-sm text-gray-500 sm:table-cell">
                      {person.DEPT}
                    </td>
                    <td className=" whitespace-nowrap px-3 py-3 text-sm text-gray-500 lg:table-cell">
                      {person.AGE}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                      {person.MOBILE}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                      {person.EMP_DATE}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                      <div className="px-4 bg-primary text-slate-lght w-fit rounded-md">
                        {person.STATUS}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
