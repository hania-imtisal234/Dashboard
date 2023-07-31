import "./Navbar.css";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import { HOME } from "../../Routes/Routes.jsx";
import { PROFILE } from "../../Routes/Routes.jsx";
import { WEBSITE_NAME } from "../../Constants/Constants";

function Navbar() {
  return (
    <div className="Header">
      <div className="Container">
        <Link to={HOME}>
          <div className="left-Container">
            <div className="logo">
              <FlagCircleIcon />
            </div>
            <div className="webiste-name">{WEBSITE_NAME}</div>
          </div>
        </Link>
        <div className="right-Container">
          <div className="Services-PageLink">
            <Link className="custom-link">Services </Link>
          </div>
          <div className="Aboutus-PageLink">
            <Link className="custom-link">AboutUs </Link>
          </div>
          <Link to={PROFILE}>
            <div className="avatar">
              <AccountCircleIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
