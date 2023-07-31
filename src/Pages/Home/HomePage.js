import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { WEBSITE_NAME } from "../../Constants/Constants";

const HomePage = () => {
  return (
    <div className="bg-my-white h-30">
      <div className="grid grid-cols-8 gap-0 h-full">
        <div className="xs:col-span-2 h-full sm:col-span-2 md:col-span-1 lg:col-span-1">
          <Sidebar />
        </div>
        <div className="xs:col-span-6 place-items-center md:col-span-7 mb-24">
          <div className="bg-sky-blue grid grid-rows-30 gap-3 m-2 mt-6 rounded-md ">
            <div className="bg-my-blue rows-span-6 p-4 m-2 rounded-md">
              <h2 className="text-white text-xl">
                Welcome to{" "}
                <tag className="font-bold italic">{WEBSITE_NAME}!</tag>
              </h2>
            </div>
            <div className="bg-my-blue rows-span-2 p-4 mx-2 mb-2 rounded-md">
              <p className="text-white text-lg">
                At {WEBSITE_NAME}, we are passionate about providing accurate
                and comprehensive country data to our users. Our mission is to
                create a one-stop platform where you can explore and discover
                essential information about countries from all over the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
