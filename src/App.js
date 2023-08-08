import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar.js";
import Sidebar from "./Components/Sidebar/Sidebar";
import AllCountries from "./Components/AllCountries/AllCountries";
import AllCountriesPage from "./Pages/AllCountriesPage/AllCountriesPage";
import HomePage from "./Pages/Home/HomePage";
import ProfilePage from "./Pages/Profile/Profile";
import { HOME, MYCOUNTRY, NEIGHBORING_COUNTRIES } from "./Routes/Routes";
import { ALLCOUNTRIES } from "./Routes/Routes";
import { PROFILE } from "./Routes/Routes";
import CountryDetailsPage from "./Pages/CountryDetailsPage/CountryDetailsPage";
import NeighboringCountries from "./Pages/NeighboringCountries/NeighboringCountries";
import { COUNTRYDETAILS } from "./Routes/Routes";
const App = () => {
  return (
    <div className="bg-my-white h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={HOME} element={<HomePage />} />
          <Route path={ALLCOUNTRIES} element={<AllCountriesPage />} />
          <Route path={COUNTRYDETAILS} element={<CountryDetailsPage />} />
          <Route
            path={NEIGHBORING_COUNTRIES}
            element={<CountryDetailsPage />}
          />
          <Route path={PROFILE} element={<ProfilePage />} />
          <Route path={MYCOUNTRY} element={<NeighboringCountries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
