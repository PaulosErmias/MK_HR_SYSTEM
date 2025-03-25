import { useEffect, useState } from "react";
import { FemaleSvg, MaleSvg } from "../../assets/icons";
import { useDepartmentsQuery } from "../../hooks/useDepartmentsQuery";
import { useEmployeesQuery } from "../../hooks/useEmployeesQuery";
import useFetch from "../../hooks/useFetch";
import { getDepartmentEmployeeCounts } from "../../utils/getDepartmentEmployeeCounts";
import { getGenderPercentage } from "../../utils/getGenderPercentage";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
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

const data = [
  { id: 1, department: "Technology", quantity: "3" },
  { id: 2, department: "Construction", quantity: "2" },
  { id: 3, department: "Social", quantity: "4" },
  { id: 4, department: "Finance", quantity: "1" },
];

function Dashboard() {
  const {
    data: departmentsRes,
    isLoading: isLoadingDept,
    isError: isErrorDept,
    error: errDept,
  } = useDepartmentsQuery();

  const {
    data: employeesRes,
    isLoading: isLoadingEmp,
    isError: isErrEmp,
    error: errEmp,
  } = useEmployeesQuery();

  // Initialize with default structure
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "Number of Departments",
        data: [],
        backgroundColor: "#3e604c",
        barPercentage: 1,
        categoryPercentage: 0.57,
      },
    ],
  });

  const [empCount, setEmpCount] = useState([]);

  useEffect(() => {
    if (departmentsRes?.data?.data && employeesRes?.data?.body) {
      setEmpCount(() =>
        getDepartmentEmployeeCounts(
          employeesRes?.data?.body,
          departmentsRes?.data?.data.map((dept) => dept.deptcode)
        )
      );
    }
  }, [departmentsRes, employeesRes]);

  // Update when data loads
  useEffect(() => {
    if (departmentsRes?.data?.data) {
      setUserData((prev) => ({
        ...prev,
        labels: departmentsRes.data.data.map((dept) => dept.description),
        datasets: prev.datasets.map((dataset) => ({
          ...dataset,
          data: data.map((d) => d.quantity),
        })),
      }));
    }
  }, [departmentsRes]);

  const [doughnutData, setDoughnutData] = useState({
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Employee Composition",
        data: [], // Female: 35%, Male: 65%
        backgroundColor: ["#BB7622", "#E6D02A"],
        borderWidth: [0, 8], // Set border thickness for inner and outer arcs
        borderColor: ["#BB7622", "#E6D02A"],
        // borderAlign: "inner",
      },
    ],
  });

  /*
useEffect(() => {
    if (departmentsRes?.data?.data) {
      setUserData((prev) => ({
        ...prev,
        labels: departmentsRes.data.data.map((dept) => dept.description),
        datasets: prev.datasets.map((dataset) => ({
          ...dataset,
          data: data.map((d) => d.quantity),
        })),
      }));
    }
    // console.log(employeesRes?.data?.body);
  }, [departmentsRes]);
*/

  useEffect(() => {
    // Verify the correct data path - add console.log here
    // console.log("Employees response:", employeesRes?.data?.body);

    if (employeesRes?.data?.body) {
      // Changed from .body to .data
      const percentages = getGenderPercentage(employeesRes?.data?.body);
      console.log("percentages" + percentages);
      setDoughnutData((prev) => ({
        ...prev,
        datasets: prev.datasets.map((dataset) => ({
          ...dataset, // Preserve all existing properties
          data: percentages,
        })),
      }));
    }
  }, [employeesRes]);

  const chartOptions = {
    aspectRatio: 1,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y: { beginAtZero: true, max: 4, ticks: { stepSize: 1 } },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // Thickness of the doughnut

    plugins: {
      legend: {
        display: false, // Disable the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
    hover: {
      mode: null, // Disable hover interaction
    },
    cutout: "65%",
  };

  return (
    <div className="w-min mx-auto bg-[#F8FAFB] z-0 h-full px-10 py-4 flex flex-col gap-4 fixed">
      <div className="flex z-10 w-full items-center justify-between ">
        {employeeStats.map((employeeStat) => {
          return (
            <EmployeeInfo
              employeeStat={employeeStat}
              key={employeeStat.title}
            />
          );
        })}
      </div>
      <div className="h-[16.4rem] w-full rounded-md overflow-scroll scrollbar-hide shadow-even">
        <Table />
      </div>
      <div className="flex h-[15.5rem] mt-1 gap-12">
        <div className="h-full w-[25rem] shadow-even rounded-md z-0 relative">
          <h2 className="text-base mt-4 ml-4">Employee Composition</h2>
          <div className="w-full h-full p-4 flex justify-center">
            <DoughnutChart chartData={doughnutData} options={doughnutOptions} />
          </div>
          <div>
            <span className="absolute bottom-2 -translate-x-1/2 left-1/2">
              <p className="text-sm font-normal text-[#949494]">
                1340 Employee Total
              </p>
            </span>
          </div>
          <div className="bg-white z-30 w-fit rounded-md p-1 flex items-center justify-center gap-2 shadow-xl absolute bottom-16 right-24">
            <MaleSvg />
            <p className="text-sm">{doughnutData.datasets[0].data[0]}%</p>
          </div>
          <div className="bg-white z-30 w-fit rounded-md p-1 flex items-center justify-center gap-2 shadow-xl absolute top-20 left-[5.8rem]">
            <FemaleSvg />
            <p className="text-sm">{doughnutData.datasets[0].data[1]}%</p>
          </div>
        </div>

        <div className="h-full w-[40rem] rounded-md flex items-center justify-center shadow-even">
          <BarChart chartData={userData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
