import React, { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userDataCognito"))
  );

  // User Methods
  const setUserDataHandler = (profile) => {
    setUser(profile);
  };

  const removeUserDataHandler = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUserDataHandler,
        removeUserDataHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
