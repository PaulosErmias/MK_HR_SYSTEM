import { FilterSortSvg } from "../../assets/icons";
const people = [
  {
    name: "Abebe Kebede",
    department: "Software Development",
    age: "22",
    mobile: "0909156085",
    employeeDate: "10/10/2022",
    status: "Active",
  },
  {
    name: "Abebech Kebede",
    department: "Finance",
    age: "24",
    mobile: "0912312121",
    employeeDate: "09/07/2021",
    status: "Active",
  },
  {
    name: "Abeba Kebede",
    department: "Software Development",
    age: "25",
    mobile: "0921221343",
    employeeDate: "05/08/2023",
    status: "Active",
  },
  {
    name: "Abebe Kebede",
    department: "Software Development",
    age: "22",
    mobile: "0909156085",
    employeeDate: "10/10/2022",
    status: "Active",
  },
  {
    name: "Abebech Kebede",
    department: "Finance",
    age: "24",
    mobile: "0912312121",
    employeeDate: "09/07/2021",
    status: "Active",
  },
  {
    name: "Abeba Kebede",
    department: "Software Development",
    age: "25",
    mobile: "0921221343",
    employeeDate: "05/08/2023",
    status: "Active",
  },
  {
    name: "Abebe Kebede",
    department: "Software Development",
    age: "22",
    mobile: "0909156085",
    employeeDate: "10/10/2022",
    status: "Active",
  },
  {
    name: "Abebech Kebede",
    department: "Finance",
    age: "24",
    mobile: "0912312121",
    employeeDate: "09/07/2021",
    status: "Active",
  },
  {
    name: "Abeba Kebede",
    department: "Software Development",
    age: "25",
    mobile: "0921221343",
    employeeDate: "05/08/2023",
    status: "Active",
  },
  // More people...
];

export default function Table() {
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
              <thead className="bg-gray-lght">
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    Employee Name
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-bold text-green-dark backdrop-blur backdrop-filter sm:table-cell"
                  >
                    Department
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-bold text-green-dark backdrop-blur backdrop-filter lg:table-cell"
                  >
                    Age
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-bold text-green-dark backdrop-blur backdrop-filter"
                  >
                    Mobile
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-bold text-green-dark backdrop-blur backdrop-filter"
                  >
                    Employee Date
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-5 py-3.5 text-left text-sm font-bold text-green-dark backdrop-blur backdrop-filter"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {people.map((person, personIdx) => (
                  <tr key={person.age}>
                    <td className="whitespace-nowrap py-3.5 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                      {person.name}
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-3 text-sm text-gray-500 sm:table-cell">
                      {person.department}
                    </td>
                    <td className="hidden whitespace-nowrap px-3 py-3 text-sm text-gray-500 lg:table-cell">
                      {person.age}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                      {person.mobile}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                      {person.employeeDate}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500">
                      <div className="px-4 bg-primary text-slate-lght w-fit rounded-md">
                        {person.status}
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
