import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const NeighboringCountries = () => {
  const [inputCountry, setInputCountry] = useState(null);
  const getInput = (event) => {
    setInputCountry(event.target.value);
  };
  const handleClick = (e) => {
    setInputCountry("");
  };

  return (
    <div className="h-screen">
      <div className="grid grid-cols-8 gap-0 ">
        <div className="xs:col-span-2 h-full sm:col-span-2 md:col-span-1 lg:col-span-1">
          <Sidebar />
        </div>
        <div className="h-screen xs:col-span-6 place-items-center md:col-span-7 p-2">
          <div className="grid grid-rows-2 text-end p-4 ">
            <div className="flex justify-center gap-4">
              <h4 className="mt-2 text-dark-blue">Find Neighbours</h4>
              <input
                type="text"
                placeholder="Enter Country Name"
                value={inputCountry}
                onChange={getInput}
                className="h-10 m text-center rounded-md "
              />
              <button className="m-2 w-10 -ml-2" onClick={handleClick}>
                <SearchIcon className="text-my-white " />
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeighboringCountries;
