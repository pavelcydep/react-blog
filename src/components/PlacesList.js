import React, { useEffect, useState } from 'react';
import UserData from './UserData';
import axios from 'axios';
import OnLoadingUserData from './OnLoadingUserData';
function PlacesList() {


  const DataLoading =  OnLoadingUserData(UserData);
  const [appState, setAppState] = useState(
    {
      loading: false,
      persons: null,
    }
  )

 useEffect(() => {
    setAppState({loading: true})
    const apiUrl = "http://httpbin.org/#/Images"
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState({
      loading: false,
      persons: allPersons
       });
    });
  }, [setAppState]);


  return (
    
    <div className="places-list root__section">
       <DataLoading isLoading={appState.loading} persons={appState.persons} />
      </div>

    
  );
}
  
export default PlacesList;