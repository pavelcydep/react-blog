import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import closePopupIcon from '../image/close.svg'
const useStyles = makeStyles((theme)=>({
    root:{
 
       marginTop:theme.spacing(1),
     width:"50%",
     
    }
    
    }))

   
export const Form =({children, ...props})=>{
    const styles = useStyles()
    return (
        <div className={`popup popup-${props.name} ${props.isOpen && 'popup_is-opened'}`}>
 <div className="popup__content">
     
        <h3 className="popup__title">{props.title}</h3>
        <img
          onClick={props.onClose}
          src={closePopupIcon}
          alt="закрыть попап"
          className={`popup__close popup__close-${props.name}`}
        />
     
<form className="popup__form" noValidate {...props}>{children}</form>
    </div>
    </div>)
}