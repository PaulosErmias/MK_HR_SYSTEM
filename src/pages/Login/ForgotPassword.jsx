import React, { useState } from "react";
import "./Login.css"; // Ensure the CSS matches the styling provided in the image
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [isSuccess, setSuccess] = useState(false);
  const [username, setFrgtPassword] = useState("");
  const [alertMsg1, setAlertMsg] = useState("");

  //alertMsg1 = "";

  // const handleForgot = (e) => {
  //   e.preventDefault();
  //   if (frgPassword === "admin") {
  //     setAlert("Your Password: admin2024");
  //   } else {
  //     setAlert("Please Enter Your Correct User Name!");
  //   }
  // };
  const handleForgot = async (e) => {
    e.preventDefault();

    if (!username) {
      setAlertMsg("Username and password cannot be empty.");
      return;
    }

    try {
      const response = await fetch(
        "https://mkhr-backend.onrender.com/api/v1.0.0/user/sendForgotPasswordCode",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName: username }),
          mode: "cors",
        }
      );

      const data = await response.json();
      console.log("Response Data:", data);
      console.log("Username being sent:", username);
      if (response.ok) {
        setAlertMsg(`Success: ${data.hint}`);
        setSuccess(`${data.username}`);
      } else {
        setAlertMsg(`Error: ${data.message}`);
        setSuccess("");
      }
    } catch (error) {
      console.error("Error during password recovery:", error.message);
      setAlertMsg("An error occurred. Please try again later.");
      setSuccess("");
    }
  };

  return (
    <div className="">
      <div className="w-[25rem] mx-auto rounded-3xl border-[#d2d0d0] border-solid border-2 p-8 mt-28">
        <img
          src="forgot_lock.jpg"
          alt="Forgot_Image"
          className="w-30 items-center logo"
        />
        <h2 className="login-title">Forgot Password</h2>
        <label
          htmlFor="username"
          style={{ fontWeight: "normal", color: "#a09e9e", fontSize: "0.9rem" }}
        >
          <p>
            Enter Your username and recieve temporary password that help you to
            login and change your password there
          </p>
        </label>

        <form onSubmit={handleForgot}>
          <div className="input-group">
            <h4 style={{ color: isSuccess ? "green" : "red" }}>{alertMsg1}</h4>
            <br></br>
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setFrgtPassword(e.target.value.trim())}
              required
              placeholder="User Name"
            />
          </div>

          <button type="submit" className="login-button">
            Forgot
          </button>
          <div className="options">
            <Link
              to="/"
              className="forgot-password"
              style={{ color: "#e79b03", textAlign: "center", padding: "1rem" }}
            >
              {"\u003C"} Back To Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
