import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { loginToAPI } from "./utils";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const signIn = useSignIn();
  const navigate = useNavigate();

  async function handleSubmit() {
    const data = await loginToAPI(formData);

    if (
      signIn({
        token: data.access_token,
        tokenType: "Bearer",
        authState: data.email,
        expiresIn: data.expires_in,
      })
    ) {
      navigate("/dashboard");
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <h1>Log in to your account</h1>
      {/* <label htmlFor="email">Email</label> */}
      <p className="form--welcome">Welcome back! Please enter your details.</p>
      <input
        className="form--input"
        type="email"
        placeholder="Email"
        name="email"
        required
        onChange={handleChange}
        value={formData.email}
      />
      {/* <label htmlFor="password">Password</label> */}
      <input
        className="form--input"
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={handleChange}
        value={formData.password}
      />
      <button type="submit" onClick={handleSubmit}>
        Log in
      </button>
      <h2 className="check-sign-in"></h2>
    </form>
  );
}
