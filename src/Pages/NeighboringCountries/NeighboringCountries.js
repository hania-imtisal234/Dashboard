import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { API_ERROR } from "../../Constants/Constants";
import { useEffect } from "react";
import { countryListAPI } from "../../Constants/Constants";
import { Continents } from "../../Constants/Constants";
import Card from "../../Components/Card/Card";

const NeighboringCountries = () => {
  const [inputCountry, setInputCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [asianCountriesList, setAsianCountiesList] = useState("all");
  const [matchingBordersList, setMatchingBordersList] = useState([]);
  const getInput = (event) => {
    setInputCountry(event.target.value);
  };
  const handleClick = (e) => {
    setIsLoading(true);
    getNeighbours();
  };

  const getNeighbours = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(countryListAPI);
      const countryData = await response.json();

      let filteredCountryList = [];
      filteredCountryList = countryData.filter(
        (country) => country.continents[0] === Continents.Asia
      );
      setAsianCountiesList(filteredCountryList);

      const getInputCountryData = async () => {
        try {
          const url = `https://restcountries.com/v3.1/name/${inputCountry}/`;
          const response = await fetch(url);

          const inputCountryData = await response.json();

          const { borders } = inputCountryData[0];
          const inputCountryBorder = {
            borders: borders,
          };

          const neighbours = [];

          for (const border of inputCountryBorder.borders) {
            const neighborCountry = filteredCountryList.find(
              (country) => country.cca3 === border
            );

            if (neighborCountry) {
              neighbours.push({
                name: neighborCountry.name.official,
                flag: neighborCountry.flags.png,
                continent: neighborCountry.continents,
              });
            }
          }
          setMatchingBordersList(neighbours);
          setIsLoading(false);
        } catch (err) {
          setIsLoading(false);
          throw new Error(API_ERROR);
        }
      };
      getInputCountryData();
    } catch (err) {
      setIsLoading(false);
      throw new Error(API_ERROR);
    }
  };

  useEffect(() => {}, [inputCountry]);

  return (
    <div className="h-screen">
      <div className="h-screen grid grid-cols-8 gap-0 ">
        <div className="h-screen xs:col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1">
          <Sidebar />
        </div>
        <div className="h-screen xs:col-span-6  md:col-span-7">
          <div className="bg-my-white h-screen grid grid-rows-10 place-items-center">
            <div className="rows-span-1 ">
              <h4 className="mt-2 text-dark-blue ml-8 mb-2">Find Neighbours</h4>
              <input
                type="text"
                placeholder="Enter Country Name"
                value={inputCountry}
                onChange={getInput}
                className="h-10 m text-center rounded-md mr-4 "
              />
              <button className="m-2 w-10 -ml-2" onClick={handleClick}>
                <SearchIcon className="text-my-white " />
              </button>
            </div>
            <div className="h-screen rows-span-1">
              <div className="h-screen grid grid-cols-8 gap-10 m-8">
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  matchingBordersList.map((country, index) => (
                    <div className="col-span-2 xs:col-span-4">
                      <div
                        key={index}
                        className="xs:col-span-2 sm:col-span-2 my-2"
                      >
                        <Card
                          name={country.name}
                          common={country.common}
                          flag={country.flag}
                          continent={country.continent}
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeighboringCountries;
