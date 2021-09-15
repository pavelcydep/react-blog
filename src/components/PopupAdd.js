import PopupWithForm from "./PopupWithForm";

function PopupAdd(props) {
  
  return (
    
   
   <PopupWithForm

   name= "add"
   title= "Добавить картинку"
   onClose={props.onClose}
   isOpen={props.isOpenAdd}
   nameButton="кнопка"
   containerInput={
     <>
      <div className="input-container">
    <input type="text" 
    id="user" 
    name="name" 
    className="popup__input popup__input_type_name" 
    minLength="2" 
    maxLength="30" 
    required 
    />
      </div>
      <div className="input-container">
    <input type="text" 
    id="job"
     name="link" 
    className="popup__input popup__input_type_link-url" 
    minLength="2"
     required 
   />
  </div>
  </>
  }

   
     
      
  />
    
  
);
  }
export default PopupAdd;