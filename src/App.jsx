import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import instance from "./api/axiosConfig";
import Navbar from "./components/Navbar.jsx";
import SideBar from "./components/ui/SideBar.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import ForgotPassword from "./pages/Login/ForgotPassword.jsx";
import Login from "./pages/Login/Login.jsx";

export default function App() {
  // useEffect(() => {
  //   async function fetchDepartments() {
  //     try {
  //       const res = await instance.get("/departments");
  //       console.log(res.data);
  //     } catch (error) {
  //       console.error("Error fetching departments:", error);
  //     }
  //   }
  //   fetchDepartments();
  // }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route
          path="/dashboard"
          element={
            <div className="text-3xl font-bold  h-svh w-full">
              <Navbar />
              <div className="w-full h-[88vh] flex overflow-scroll scrollbar-hide">
                <SideBar />
                <div className="w-full h-full overflow-scroll scrollbar-hide">
                  <Dashboard />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
