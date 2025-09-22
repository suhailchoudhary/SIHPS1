import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle normal email/password login (demo, replace with backend API)
  const handleLogin = async (e) => {
    e.preventDefault();
    // Example: store email as user, in real app call backend
    const user = { email };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", "dummy-jwt-token"); // replace with backend JWT
    navigate("/dashboard");
  };

  // Handle Google login
  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/google-login",
        { credential: credentialResponse.credential }
      );

      // Store backend JWT and user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleError = () => {
    console.log("Google Login Failed");
  };

  return (
    <div>
        <Navbar/>
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.loginBtn}>
            Continue
          </button>
        </form>

        <div style={{ textAlign: "center", margin: "15px 0" }}>OR</div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
          />
        </div>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>

    </div>

  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "95vh",
    background: "#f5f5f5",
  },
  formContainer: {
    width: "350px",
    padding: "30px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  loginBtn: {
    width: "100%",
    padding: "10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Login;
