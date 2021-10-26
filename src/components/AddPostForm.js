import close from "../images/close.svg"
export const AddPostForm=({toggleBlogClose})=>{
    console.log(toggleBlogClose);
    return(
        
          
        <div className="popup">
       
        
        <div class="popup__content">
         
         <img src={close}  onClick={toggleBlogClose} alt="" class="popup__close"/>
            
          <h3 class="popup__title">Новое место</h3>
          <form class="popup__form" name="new" novalidate>
           
            <input type="text" id="name-card" name="name" class="popup__input popup__input_type_name" minlength="2" maxlength="30" required placeholder="Название поста"></input>
            
            <span id="name-card-error" class="error"></span>
          
            <textarea type="url" id="link" name="link" class="popup__input popup__input_type_link-url" minlength="2" required placeholder="Текст поста"/>
          
            <span id="link-error" class="error"></span>
            <button type="submit" class="button popup__button  popup__button_valid" >+</button>
        </form>
      </div>
      
    </div>
    );
}