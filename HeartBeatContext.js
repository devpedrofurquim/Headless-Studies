import React, { createContext, useState, useContext } from 'react';

const HeartBeatContext = createContext();

export const HeartBeatProvider = ({ children }) => {
  const [heartBeat, setHeartBeat] = useState(false);

  return (
    <HeartBeatContext.Provider value={{ heartBeat, setHeartBeat }}>
      {children}
    </HeartBeatContext.Provider>
  );
};

export const useHeartBeat = () => useContext(HeartBeatContext);