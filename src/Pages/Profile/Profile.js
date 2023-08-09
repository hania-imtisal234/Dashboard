import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const ProfilePage = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-8 gap-0 h-full ">
        <div className="xs:col-span-2 h-full sm:col-span-2 md:col-span-1 lg:col-span-1">
          <Sidebar />
        </div>
        <div className="xs:col-span-6 place-items-center md:col-span-7"></div>
      </div>
    </div>
  );
};

export default ProfilePage;
