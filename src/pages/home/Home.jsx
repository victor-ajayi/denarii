import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <nav className="navbar">
        <span className="navbar--brand">denarii</span>
      </nav>
      <h1 className="main-header">
        Управляйте своими финансами <br /> <span> правильным способом!</span>
      </h1>
      <Link to="/register" className="login">
        Пошли!
      </Link>
    </div>
  );
}
