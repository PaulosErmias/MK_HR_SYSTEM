import { useState } from "react";
import "./Login.css"; // Ensure the CSS matches the styling provided in the image
//import { BsCursor } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [loading, setLoading] = useState(false);
  // const [checkMe, setCheckMe] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const navigate = useNavigate();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (userName === "admin" && password === "admin2024") {
  //     navigate("/dashboard");
  //   } else {
  //     setAlertMsg("Invalid Credentials, Please try again!");
  //     //alert("Invalid Credentials, Please try again!");
  //   }
  // };

  //app.use(cors({ origin: "http://localhost:5173" })); // Allow requests from your frontend

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!username || !password) {
      setAlertMsg("Username and password cannot be empty.");
      return;
    }

    try {
      const response = await fetch(
        "https://mkhr-backend.onrender.com/api/v1.0.0/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName: username, password: password }),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);
      if (response.ok) {
        setAlertMsg(`Success: ${data.message}`);
        localStorage.setItem("authToken", data.token);
        navigate("/dashboard");
      } else {
        setAlertMsg(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error(
        "Error during login please contact System Administor:",
        error.message
      );
      setAlertMsg("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
    setTimeout(() => {
      setPassword("");
      setUserName("");
      setAlertMsg("");
    }, 5000);
  };

  return (
    <div className="w-full">
      <div className="flex w-full justify-end">
        <p className="justify-end mt-2 mr-4">
          <a href="#" style={{ cursor: "pointer" }}>
            Need Help?
          </a>
        </p>
      </div>
      <div className="w-[25rem] mx-auto rounded-3xl border-[#d2d0d0] border-solid border-2 p-8 mt-28">
        <img src="logo.png" alt="Logo" className="w-30 items-center logo" />
        <h2 className="login-title">Sign In to Account</h2>

        <h4 style={{ color: "red" }}>{alertMsg}</h4>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUserName(e.target.value.trim())}
              placeholder="User Name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="*************"
                value={password}
                onChange={(e) => setPassword(e.target.value.trim())}
              />
              <span
                className={`password-toggle-icon ${
                  passwordVisible ? "visible" : ""
                }`}
                onClick={togglePasswordVisibility}
                role="button"
                aria-label="Toggle password visibility"
              >
                {passwordVisible ? (
                  <img src="eye-off.jpg" alt="eye-off" className="w-5" />
                ) : (
                  "👁️"
                )}
              </span>
            </div>
          </div>
          <div className="options">
            <label>
              <input
                type="checkbox"
                style={{ color: "green", fontSize: "2rem" }}
              />{" "}
              Keep me signed in
            </label>
            <Link
              to="/forgot"
              className="forgot-password"
              style={{ color: "#e79b03" }}
            >
              Forgot Password?
            </Link>
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Please wait..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
