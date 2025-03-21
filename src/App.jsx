import { useEffect } from "react";
import instance from "./api/axiosConfig";
import Navbar from "./components/Navbar.jsx";
import SideBar from "./components/ui/SideBar.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";

export default function App() {
  useEffect(() => {
    async function fetchDepartments() {
      try {
        const res = await instance.get("/departments");
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    }
    fetchDepartments();
  }, []);
  return (
    <div className="text-3xl font-bold  h-svh">
      <Navbar />
      <div className="w-full h-[88vh] flex overflow-scroll scrollbar-hide">
        <SideBar />
        <div className="w-full h-full overflow-scroll scrollbar-hide">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
