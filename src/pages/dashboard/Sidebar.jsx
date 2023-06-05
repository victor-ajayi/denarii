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
          <UilUser color="#317121" />
          Profile
        </a>
        <a href="#" className="sidebar-link">
          <UilEstate color="#317121" />
          Dashboard
        </a>
        <a href="#" className="sidebar-link">
          <UilListUl color="#317121" />
          Categories
        </a>
      </div>
      <a href="#" className="sidebar-link">
        <UilCog color="#317121" />
        Settings
      </a>
    </div>
  );
}
