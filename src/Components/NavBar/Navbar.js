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
  const { userInfo, setUserInfo, toggleTheme, themeClass, isDarkTheme } =
    useUserContext();

  const handleAvatarClick = () => {
    setUserInfo({
      name: "Hania Imtisal",
      info: "Hi I'm hania",
    });
  };
  const handleThemeToggle = () => {
    toggleTheme();
  };
  return (
    <div className={`Header ${isDarkTheme ? "bg-dark" : "bg-my-white"}`}>
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
          <div className="">
            <div className={`bg-${themeClass}-bg text-${themeClass}-text`}>
              <label class="relative inline-flex items-center mb-5 cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  class="sr-only peer"
                  onClick={handleThemeToggle}
                />
                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-slate-500"></div>
                <span class="ml-3 mr-5 text-md  text-my-white dark:text-gray-300">
                  Dark mode
                </span>
              </label>
            </div>
          </div>
          <div className="Services-PageLink ">
            <Link className="custom-link ml-4">Services </Link>
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
