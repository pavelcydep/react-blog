import React, { createContext, useContext } from "react";
const DataContext = createContext();
export const DataProvider = ({children})=>{
const [data,setData] = React.useState({});
const setValues =(values)=>{
    //values- то что будет вводиться в инпут
    //prevData-обЪект с данными
    setData((prevData)=>({
        ...prevData,
        ...values,
    }));
};

return <DataContext.Provider value={{data,setValues}}>{children}</DataContext.Provider>
};
export const useData =()=>useContext(DataContext);
