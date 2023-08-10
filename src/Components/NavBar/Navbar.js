import "./Navbar.css";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import { HOME } from "../../Routes/Routes.jsx";
import { PROFILE } from "../../Routes/Routes.jsx";
import { WEBSITE_NAME } from "../../Constants/Constants";
import { useUserContext } from "../../Context/UserProvider";
import ProfilePage from "../../Pages/Profile/Profile";

function Navbar() {
  const { userInfo, setUserInfo } = useUserContext();

  const handleAvatarClick = () => {
    setUserInfo({
      name: "Hania Imtisal",
      info: "Hi I'm hania",
    });
  };
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
            <div className="avatar" onClick={handleAvatarClick}>
              <AccountCircleIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
