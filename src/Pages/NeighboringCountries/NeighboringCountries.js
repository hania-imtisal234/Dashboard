import React from "react";
import "./NeighboringCountries.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { API_ERROR } from "../../Constants/Constants";
import { useEffect } from "react";
import { countryListAPI } from "../../Constants/Constants";
import { Continents } from "../../Constants/Constants";
import Card from "../../Components/Card/Card";
import { emptyInputErrorMessage } from "../../Constants/Constants";
import { invalidInputErrorMessage } from "../../Constants/Constants";
import { wrongSpellingErrorMessage } from "../../Constants/Constants";
import { noBorderErrorMessage } from "../../Constants/Constants";

const NeighboringCountries = () => {
  const [inputCountry, setInputCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [asianCountriesList, setAsianCountiesList] = useState("all");
  const [matchingBordersList, setMatchingBordersList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [asianErrorMessage, setAsianErrorMessage] = useState("");

  const getInput = (event) => {
    setInputCountry(event.target.value);
  };
  const handleClick = (e) => {
    if (!inputCountry.trim()) {
      setErrorMessage(emptyInputErrorMessage);
      setAsianErrorMessage("");
      return;
    }
    setErrorMessage("");
    setIsLoading(true);
    getNeighbours();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (!inputCountry.trim()) {
        setErrorMessage(emptyInputErrorMessage);
        setAsianErrorMessage("");
      } else {
        setErrorMessage("");
        setIsLoading(true);
        getNeighbours();
      }
    }
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
          if (response.status === 404) {
            setAsianErrorMessage(wrongSpellingErrorMessage);
            setIsLoading(false);
            return;
          }
          setAsianErrorMessage("");
          const inputCountryData = await response.json();
          let belongsToFilteredCountryList = false;

          for (const country of filteredCountryList) {
            if (country.cca3 === inputCountryData[0].cca3) {
              belongsToFilteredCountryList = true;
              break;
            }
          }
          if (belongsToFilteredCountryList) {
            const { borders } = inputCountryData[0];
            if (!borders || borders.length === 0) {
              setAsianErrorMessage(noBorderErrorMessage);
              setIsLoading(false);
              return;
            }

            const inputCountryBorder = {
              borders,
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
          } else {
            setAsianErrorMessage(invalidInputErrorMessage);
            setIsLoading(false);
          }
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

  return (
    <div className="h-full">
      <div className=" grid grid-cols-8 gap-0 ">
        <div className="h-full xs:col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1">
          <Sidebar />
        </div>
        <div className="h-screen xs:col-span-6  md:col-span-7">
          <div className="bg-my-white h-screen grid grid-rows-10 ">
            <div className="rows-span-1 ">
              <div className="flex justify-center">
                <h4 className="mt-2 text-dark-blue mb-2">Find Neighbours</h4>
              </div>
              <div className="flex justify-center mb-4 lg:-mb-30">
                <input
                  type="text"
                  placeholder="Enter Country Name"
                  value={inputCountry}
                  onChange={getInput}
                  onKeyDown={handleKeyDown}
                  className="h-10 m text-center rounded-md ml-8"
                />
                <button className="m-2 w-10 " onClick={handleClick}>
                  <SearchIcon className="text-my-white " />
                </button>
              </div>
            </div>
            {errorMessage && (
              <div className="flex justify-center italic font-bold text-lg text-red-500">
                {errorMessage}
              </div>
            )}
            {asianErrorMessage && (
              <div className="flex justify-center text-red-500">
                {asianErrorMessage}
              </div>
            )}

            <div className="rows-span-3 bg-my-white">
              <div className="grid sm:grid-cols-1 md:grid-cols-6 md:gap-3 lg:grid-cols-8 lg:-mt-30 gap-2 ml-10">
                {isLoading ? (
                  <div className="flex justify-center">
                    <p className="flex justify-center">Loading...</p>
                  </div>
                ) : (
                  matchingBordersList.map((country, index) => (
                    <div
                      className="card xs:col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 mb-2 "
                      key={index}
                    >
                      <Card
                        name={country.name}
                        common={country.common}
                        flag={country.flag}
                        continent={country.continent}
                      />
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
