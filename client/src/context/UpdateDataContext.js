import React, { useState, createContext } from "react";

export const UpdateDataContext = createContext();

export const UpdateDataProvider = (props) => {
  const [updateDataFlag, setUpdateDataFlag] = useState(false);
  const [userInfo, setUserInfo] = useState({
  });
  const [lang, setLang] = useState("he");

  return (
    <UpdateDataContext.Provider
      value={[userInfo, setUserInfo, lang, setLang]}
    >
      {props.children}
    </UpdateDataContext.Provider>
  );
};
