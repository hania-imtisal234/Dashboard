import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { countryListAPI } from "../../Constants/Constants";
import { API_ERROR } from "../../Constants/Constants";
import { useState, useEffect } from "react";

const CountryDetails = () => {
  const params = useParams();
  const selectedCountryName = formatString(params.countryName);

  const [countryData, setCountryData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCountryData, setSelectedCountryData] = useState(null);

  const getAPIData = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(countryListAPI);
      const data = await response.json();
      //   console.log(data);
      const first20Countries = data.slice(0, 20);
      const countryData = [];
      for (const country of first20Countries) {
        const { name, capital, flag, continent, currency, map } = country;
        countryData.push({
          name: country.name.official,
          capital: country.capital,
          flag: country.flags.png,
          continent: country.continents,
          currency: country.currencies.USD,
          maps: country.maps.googleMaps,
        });
      }
      setCountryData(countryData);
      //   console.log(countryData);
      //   console.log(selectedCountryName);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      throw new Error(API_ERROR);
    }
  };

  function formatString(str) {
    const words = str.split("-");
    const titleCaseWords = words.map(
      (word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
    );
    const titleCaseString = titleCaseWords.join(" ");
    return titleCaseString;
  }

  useEffect(() => {
    getAPIData();
  }, []);

  useEffect(() => {
    if (countryData.length > 0) {
      console.log({ countryData });
      const selectedCountryDetails = countryData.filter(
        (country) => country.name === selectedCountryName
      );
      //   console.log(selectedCountryDetails);
      setSelectedCountryData(selectedCountryDetails);
    }
    // console.log(selectedCountryData);
  }, [selectedCountryName]);

  return (
    <div>
      <div className="w-11/12 h-64 bg-sky-blue rounded-md place-item-center m-10">
        {!isLoading ? (
          <div>
            <h4 className="w-45 text-my-white">Loading...</h4>
          </div>
        ) : !countryData ? (
          <div>Country Data List is Empty...</div>
        ) : (
          <div>
            <div>{selectedCountryData.name}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;
