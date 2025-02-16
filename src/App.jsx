import { useEffect } from "react";
import instance from "./api/axiosConfig";
import Navbar from "./components/Navbar.jsx";
import AccountProfile from "./components/ui/AccountProfile.jsx";
import Search from "./components/ui/Search.jsx";
import SideBar from "./components/ui/SideBar.jsx";
export default function App() {
  // sample fetch
  useEffect(() => {
    async function fetchDepartments() {
      try {
        const res = await instance.get("/departments");
        console.log(res.data);
      } catch (error) {
        if (error.response) {
          console.error("Error Response Data:", error.response.data);
          console.error("Status Code:", error.response.status);
        } else {
          console.error("Error Message:", error.message);
        }
      }
    }
    fetchDepartments();
  }, []);
  return (
    <div className="text-3xl font-bold  h-svh">
      <Navbar />
      <div className="w-full h-[88vh] flex overflow-scroll scrollbar-hide">
        <SideBar />

        <div className="w-full h-full overflow-scroll scrollbar-hide"></div>
      </div>
    </div>
  );
}
