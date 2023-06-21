import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../utils";
import "./Register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const signIn = useSignIn();
  const navigate = useNavigate();

  async function handleSubmit() {
    // Register user
    try {
      const res = await registerUser(formData);
    } catch (e) {
      console.error(e);
    }

    // Login user
    let data;
    try {
      data = await loginUser(formData);
    } catch (e) {
      console.error(e);
    }

    if (
      data &&
      signIn({
        token: data?.access_token,
        tokenType: "Bearer",
        authState: data?.email,
        expiresIn: data?.expires_in,
      })
    ) {
      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 1000);
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
      <h1>Get started with Denarii</h1>
      <p className="form--welcome">Please enter your details.</p>
      <hr />
      <input
        className="form--input email"
        type="email"
        placeholder="Email"
        name="email"
        required
        onChange={handleChange}
        value={formData.email}
      />
      <input
        className="form--input password"
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={handleChange}
        value={formData.password}
      />
      <input
        className="form--input password"
        type="password"
        placeholder="Confirm password"
        name="confirmPassword"
        required
        onChange={handleChange}
        value={formData.confirmPassword}
      />
      <p className="forgot-password">Forgot password?</p>
      <button type="submit" onClick={handleSubmit}>
        Register
      </button>
      <p className="sign-up-message">
        Already have an account?{" "}
        <Link to="/login" className="sign-up">
          Log in
        </Link>
      </p>
    </form>
  );
}
