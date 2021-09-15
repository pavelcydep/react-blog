
import React, { useEffect, useState } from 'react';
import UserData from './components/UserData';
import OnLoadingUserData from './components/OnLoadingUserData';
import axios from 'axios';
import { PopupEdit } from './components/PopupEdit';
import PopupAdd from './components/PopupAdd';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route,Switch } from 'react-router-dom';
import { Step1 } from './components/PopupEdit';
import Header from './components/Header';
import Profile from './components/Profile';
import PlacesList from './components/PlacesList';
function App() {
  const [isEditProfilePopupOpen, setPopupProfile] = React.useState(false);
  const onEditProfile = () => setPopupProfile(!isEditProfilePopupOpen);

  const onCloseAll = () => {
    setPopupProfile(false);}



  



   
     
      
   




  return (
    
    <div className="App">
     <Header/>
     <Profile
      onClickEdit={onEditProfile} >
 



      </Profile>
      

  
        <PlacesList/>
        
        
        <PopupEdit 
        isOpen={isEditProfilePopupOpen}
         onClose={onCloseAll}
        />
       
      <PopupAdd  
        //isOpenAdd={isAddPopupOpen}
         //onClose={onCloseAll}
        />
     
    </div>
  );
}

export default App;
