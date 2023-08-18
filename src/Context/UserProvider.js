import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const themeClass = isDarkTheme ? "dark" : "light";
  const [userInfo, setUserInfo] = useState({
    name: "",
    info: "",
    theme: "light",
  });

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      theme: prevUserInfo.theme === "light" ? "dark" : "light",
    }));
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        isDarkTheme,
        toggleTheme,
        themeClass,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
