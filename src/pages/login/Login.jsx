import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../utils";
import "./Login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const signIn = useSignIn();
  const navigate = useNavigate();

  async function handleSubmit() {
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
      <h1>Welcome back!</h1>
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
      <p className="forgot-password">Forgot password?</p>
      <button type="submit" onClick={handleSubmit}>
        Log in
      </button>
      <p className="sign-up-message">
        Don't have an account?{" "}
        <Link to="/register" className="sign-up">
          Sign up
        </Link>
      </p>
    </form>
  );
}
