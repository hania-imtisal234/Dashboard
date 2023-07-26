import React from "react";

const AppContext = React.createContext({
  user: {},
  setUserDataHandler: () => {},
  removeUserDataHandler: () => {},
});

export default AppContext;
