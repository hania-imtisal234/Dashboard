import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { countryListAPI } from "../../Constants/Constants";
import { API_ERROR } from "../../Constants/Constants";
import { useState, useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ALLCOUNTRIES } from "../../Routes/Routes";
import { Link } from "react-router-dom";

const CountryDetailsPage = () => {
  const params = useParams();

  const selectedCountryName = params.countryName;
  const [countryDetails, setCountryDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getAPIData = async () => {
    try {
      setIsLoading(true);
      const url = `https://restcountries.com/v3.1/name/${selectedCountryName}/`;
      const response = await fetch(url);
      const countryData = await response.json();

      const { name, capital, continents, flags, currencies, maps } =
        countryData[0];
      const tempObj = {
        officialName: name?.official,
        countryCapital: capital,
        countryContinent: continents,
        countryFlag: flags?.png,
        countryCurrency: currencies,
        countryMap: maps?.googleMaps,
      };

      const countryCode = Object.keys(tempObj.countryCurrency);
      const currencyName = tempObj.countryCurrency[countryCode[0]].name;
      const currencySymbol = tempObj.countryCurrency[countryCode[0]].symbol;
      tempObj.name = currencyName;
      tempObj.symbol = currencySymbol;
      console.log(tempObj);
      setCountryDetails(tempObj);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      throw new Error(API_ERROR);
    }
  };

  useEffect(() => {
    (async () => {
      await getAPIData();
    })();
  }, []);

  return (
    <div className="h-screen">
      <div className="grid grid-cols-8 gap-0 ">
        <div className="xs:col-span-2 h-screen sm:col-span-2 md:col-span-1 lg:col-span-1">
          <Sidebar />
        </div>
        <div className="xs:col-span-6 place-items-center md:col-span-7">
          <div className="grid grid-rows-1 gap-0">
            <div className="rows-span-1 -m-6">
              <Link to={ALLCOUNTRIES}>
                <button className="mt-8 p-1 xs:ml-10 md:ml-8">
                  <ArrowBackIosNewIcon className="arrow" />
                </button>
              </Link>
            </div>
            <div className="rows-span-1">
              <div className="w-auto h-74 bg-sky-blue rounded-md place-item-center m-10">
                {isLoading ? (
                  <div>
                    <h4 className="w-45 text-my-white">Loading...</h4>
                  </div>
                ) : (
                  <div className="mt-8 p-6">
                    <div className="flex justify-center  item-center ml-15 p-2">
                      <img
                        src={countryDetails.countryFlag}
                        className=" h-32w-auto"
                      />
                    </div>
                    <div>
                      <div className="flex justify-center w-45 item-center">
                        <h4 className=" text-my-white">
                          Official Name:{" "}
                          <tag className="italic text-dark-blue font-bold">
                            {countryDetails.officialName}
                          </tag>
                        </h4>
                      </div>
                      <div className="flex justify-center w-45 item-center">
                        <h4 className=" text-my-white">
                          Capital:{" "}
                          <tag className="italic text-dark-blue font-bold">
                            {countryDetails.countryCapital}
                          </tag>
                        </h4>
                      </div>
                      <div className="flex justify-center w-45 item-center ">
                        <h4 className=" text-my-white">
                          Currency:{" "}
                          <tag className="italic text-dark-blue font-bold">
                            {countryDetails.name}
                          </tag>
                        </h4>
                        <h4 className=" text-my-white">
                          <tag className="italic text-dark-blue font-bold">
                            {"( "}
                            {countryDetails.symbol}
                            {" )"}
                          </tag>
                        </h4>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailsPage;
