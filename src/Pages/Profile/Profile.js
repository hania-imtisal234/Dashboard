import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useUserContext } from "../../Context/UserProvider";

const ProfilePage = () => {
  const { userInfo } = useUserContext();
  return (
    <div className="h-screen">
      <div className="grid grid-cols-8 gap-0 h-full ">
        <div className="xs:col-span-2 h-full sm:col-span-2 md:col-span-1 lg:col-span-1">
          <Sidebar />
        </div>
        <div className="xs:col-span-6 place-items-center md:col-span-7">
          <div>
            <div className="flex justify-center m-4">
              <h1 className="text-dark-blue font-bold text-lg italic">
                Profile Page
              </h1>
            </div>
            <div className="flex flex-col justify-center m-4">
              <p className="flex justify-center text-dark-blue font-bold m-2">
                Name:{" "}
                <span className="text-my-blue ml-2 italic">
                  {userInfo.name}
                </span>
              </p>

              <p className="flex justify-center text-dark-blue font-bold m-2">
                Info:{" "}
                <span className="text-my-blue ml-2 italic">
                  {userInfo.info}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
