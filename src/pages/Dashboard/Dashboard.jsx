import EmployeeInfo from "./EmployeeInfo";
import Table from "./Table";
const employeeStats = [
  {
    title: "Total Employees",
    quantity: "1,340",
    type: "Employee",
    rate: "10.0",
  },
  {
    title: "Total Department",
    quantity: "3,342",
    type: "Departments",
    rate: "22.5",
  },
  {
    title: "Active Employees",
    quantity: "1,000",
    type: "Employee",
    rate: "12.2",
  },
  {
    title: "InActive Employees",
    quantity: "340",
    type: "Employee",
    rate: "-7.5",
  },
];
function Dashboard() {
  return (
    <div className="w-full bg-[#F8FAFB] z-0 h-full px-10 py-8 flex flex-col gap-4">
      <div className="flex z-10 w-full items-center justify-between ">
        {employeeStats.map((employeeStat) => {
          return <EmployeeInfo employeeStat={employeeStat} />;
        })}
      </div>
      <div className="h-[17rem] rounded-md overflow-scroll scrollbar-hide shadow-even pb-7 pt-3 mt-3">
        <Table />
      </div>
    </div>
  );
}

export default Dashboard;
