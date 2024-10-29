import React, { createContext, useState } from 'react';

 
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [isLogIn, setIsLogIn] = useState(false);

  return (
    <MyContext.Provider value={{ isLogIn, setIsLogIn }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
