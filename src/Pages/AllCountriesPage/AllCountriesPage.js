import React from "react";
import Navbar from "../../Components/NavBar/Navbar.js";
import Sidebar from "../../Components/Sidebar/Sidebar.js";
import AllCountries from "../../Components/AllCountries/AllCountries.js";

const AllCountriesPage = () => {
  return (
    <div className="">
      <div className="grid grid-cols-8 gap-0 ">
        <div className="xs:col-span-2 h-full sm:col-span-2 md:col-span-1 lg:col-span-1">
          <Sidebar />
        </div>
        <div className="xs:col-span-6 place-items-center md:col-span-7">
          <AllCountries />
        </div>
      </div>
    </div>
  );
};

export default AllCountriesPage;
