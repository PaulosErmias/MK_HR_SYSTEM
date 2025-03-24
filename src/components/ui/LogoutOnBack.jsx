import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutOnBack = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackButton = () => {
      // Clear session on back button
      localStorage.removeItem("userToken");
      sessionStorage.removeItem("userToken");

      // Redirect to login page
      navigate("/");
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [navigate]);

  return null;
};

export default LogoutOnBack;
