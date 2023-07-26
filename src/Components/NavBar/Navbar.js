import "./Navbar.css";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";

function Navbar() {
  const name = "Hania";
  return (
    <div className="Header">
      <div className="Container">
        <div className="left-Container">
          <div className="logo">
            <FlagCircleIcon />
          </div>
          <div className="webiste-name">{name}</div>
        </div>
        <div className="right-Container">
          <div className="Services-PageLink">
            <Link className="custom-link">Services </Link>
          </div>
          <div className="Aboutus-PageLink">
            <Link className="custom-link">AboutUs </Link>
          </div>
          <div className="avatar">
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
