import React, { createContext, useState } from "react";

export const PookieContext = createContext();

export const PookieContextProvider = ({ children }) => {
  const [nsfwVisibility, setNsfwVisibility] = useState(false);

  return (
    <PookieContext.Provider
      value={{
        nsfwVisibility,
        setNsfwVisibility,
      }}
    >
      {children}
    </PookieContext.Provider>
  );
};
