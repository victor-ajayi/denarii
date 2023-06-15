import {
  UilCog,
  UilEstate,
  UilListUl,
  UilUser,
} from "@iconscout/react-unicons";
import "./styles/Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar--top">
        <a href="#" className="sidebar-link">
          <UilUser color="#2B4EB1" />
          Profile
        </a>
        <a href="#" className="sidebar-link">
          <UilEstate color="#2B4EB1" />
          Dashboard
        </a>
        <a href="#" className="sidebar-link">
          <UilListUl color="#2B4EB1" />
          Categories
        </a>
      </div>
      <a href="#" className="sidebar-link">
        <UilCog color="#2B4EB1" />
        Settings
      </a>
    </div>
  );
}
