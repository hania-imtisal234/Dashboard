import "./AllCountries.css";
import Card from "../Card/Card";
import { useState, useEffect, useMemo } from "react";
import { CONTINENTS } from "../../Constants/Constants";
import { countryListAPI } from "../../Constants/Constants";
import { API_ERROR } from "../../Constants/Constants";
import { Continents } from "../../Constants/Constants";

const AllCountries = () => {
  const [countryList, setCountryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState("all");

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(countryListAPI);
      const data = await response.json();

      const first20Countries = data.slice(0, 20);
      const countryData = [];
      for (const country of first20Countries) {
        const { name, flag, continent } = country;
        countryData.push({
          name: country.name.official,
          flag: country.flags.png,
          continent: country.continents,
        });
      }
      setCountryList(countryData);

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      throw new Error(API_ERROR);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredCountryList = useMemo(() => {
    switch (selectedContinent) {
      case "all":
        return countryList;
        break;
      case Continents.Asia:
        return countryList.filter(
          (country) => country.continent[0] === Continents.Asia
        );

        break;
      case Continents.Africa:
        return countryList.filter(
          (country) => country.continent[0] === Continents.Africa
        );
        break;
      case Continents.Europe:
        return countryList.filter(
          (country) => country.continent[0] === Continents.Europe
        );
        break;
      case Continents.NorthAmerica:
        return countryList.filter(
          (country) => country.continent[0] === Continents.NorthAmerica
        );
        break;
      case Continents.SouthAmerica:
        return countryList.filter(
          (country) => country.continent[0] === Continents.SouthAmerica
        );
        break;
      case Continents.Australia:
        return countryList.filter(
          (country) => country.continent[0] === Continents.Australia
        );
        break;
      case Continents.Oceania:
        return countryList.filter(
          (country) => country.continent[0] === Continents.Oceania
        );
        break;
    }
  }, [countryList, selectedContinent]);

  useEffect(() => {
    setCountryList(filteredCountryList);
  }, [filteredCountryList]);

  useEffect(() => {
    getData();
  }, [selectedContinent]);

  return (
    <div className="h-screen">
      <div className="h-screen grid grid-rows-10 gap-3">
        <div className="rows-span-1 bg-my-white mt-6 mx-8">
          <div className="flex-row w-full">
            {CONTINENTS.map((continent) => (
              <button
                key={continent}
                className={`my-2 gap-4 bg-dark-blue w-28 ${
                  selectedContinent === continent ? "bg-sky-blue" : ""
                }`}
                onClick={() => {
                  setSelectedContinent(continent);
                }}
              >
                <tag className="text-my-white">{continent}</tag>
              </button>
            ))}
          </div>
        </div>
        <div className="rows-span-3 bg-my-white -mt-4">
          <div className="grid grid-cols-8  place-items-center m-5  bg-my-white xs:grid-cols-2  sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 ">
            {isLoading ? (
              <div>
                <h4 className="w-45 text-my-white">Loading...</h4>
              </div>
            ) : !countryList.length ? (
              <div>
                <h4 className="text-my-white">Country List is empty...</h4>
              </div>
            ) : (
              countryList.map((country, index) => (
                <div
                  key={index}
                  className="card xs:col-span-2 sm:col-span-2 my-2 "
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
  );
};
export default AllCountries;
