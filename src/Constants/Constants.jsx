import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AllCountries from "../Components/AllCountries/AllCountries";

export const WEBSITE_NAME = "CountryInsights";
export const items = [
  { icon: <LanguageIcon />, itemName: "All Countries" },
  { icon: <LocationOnIcon />, itemName: "My country" },
  { icon: <InfoIcon />, itemName: "General Info" },
];

export const CONTINENTS = [
  "Asia",
  "Africa",
  "Europe",
  "NorthAmerica",
  "SouthAmerica",
  "Australia",
  "Antarctica",
];

export const API = "https://restcountries.com/v3.1/all";
export const API_ERROR = "Can't fetch Data from API";

export const paths = [
  { path: "AllCountries" },
  { path: "MyCountry" },
  { path: "GeneralInfo" },
];
