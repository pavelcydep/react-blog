import React from 'react';
import {useData,DataProvider} from '../DataContext';
const Profile=(props)=>{
  const {data, setValues} = useData()



  return (
    
    <div className="profile root__section">
    <div className="user-info">
      <div className="user-info__photo">
      
      </div>
      <div className="user-info__data">
        <h1 className="user-info__name">{data.firstName}</h1>
        <p className="user-info__job">{props.listItems}</p>
        <button onClick={props.onClickEdit} className="button user-info__button_edit">Edit</button>
      </div>
         
      
      <button onClick ={props.onClickAdd} className="button user-info__button_add">+</button>
    </div>
  </div>

    
  );
}
  
export default Profile;