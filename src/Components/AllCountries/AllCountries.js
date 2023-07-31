import "./AllCountries.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import { countryListAPI } from "../../Constants/Constants";
import { API_ERROR } from "../../Constants/Constants";
import { CONTINENTS } from "../../Constants/Constants";

const AllCountries = () => {
  const [countryList, setCountryList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      throw new Error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="grid grid-rows-10 gap-3">
        <div className="rows-span-1 bg-my-white mt-6 mx-8">
          <div className="flex-row w-full">
            {CONTINENTS.map((continents) => (
              <button className="my-2 gap-4 bg-dark-blue w-28">
                <tag className="text-my-white">{continents}</tag>
              </button>
            ))}
          </div>
        </div>
        <div className="rows-span-3 bg-my-white -mt-4">
          <div class="grid grid-cols-8  place-items-center m-5  bg-my-white xs:grid-cols-2  sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 ">
            {isLoading ? (
              <div>
                <h4 className="w-45 text-my-white">Loading...</h4>
              </div>
            ) : !countryList.length ? (
              <div>
                <h4>Country List is empty...</h4>
              </div>
            ) : (
              countryList.map((country, index) => (
                <div key={index} className="xs:col-span-2 sm:col-span-2 my-2 ">
                  <Card
                    name={country.name}
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
