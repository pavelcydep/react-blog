import close from "../images/close.svg";
import React, { Component } from 'react';
export class AddPostForm extends Component{
    state={
        title:'',
        description:'',
        image:''
    }
    handleTitleOnchange=e=>{
        this.setState({
           title:e.target.value,
        
        })
    }
    handleImageOnchange=e=>{
        this.setState({
           image:e.target.value,
        
        })
    }
    handleDescriptionOnchange=e=>{
        this.setState({
           description:e.target.value
        })
    }
    createPost=()=>{
        const post={
            id: this.props.blogArr.length+1,
            title: this.state.title,
            description:this.state.description ,
            liked: false,
            image: this.state.image   
        }
      
        this.props.addNewPost(post);
        this.props.toggleBlogClose();
    }

    render(){
    const toggleBlogClose= this.props.toggleBlogClose;
    


    return(
        
          
        <div className="popup">
       
        
        <div class="popup__content">
         
         <img src={close}  onClick={toggleBlogClose} alt="" class="popup__close"/>
            
          <h3 class="popup__title">Новое место</h3>
          <form class="popup__form" name="new" novalidate>
           
            <input
             type="text"
              id="name-card"
              name="title"
             class="popup__input popup__input_type_name"
              minlength="2"
            maxlength="30"
             required placeholder="Название поста"
             value={this.state.title}
             onChange={this.handleTitleOnchange}
             />
             
             
             <input
             type="text"
              id="name-card"
              name="image"
             class="popup__input popup__input_type_name"
              minlength="2"
          
             required placeholder="Ссылка на картинку"
             value={this.state.image}
             onChange={this.handleImageOnchange}
             />
            <span id="name-card-error" class="error"></span>
          
            <textarea
             type="text"
              id="description"
               name="description"
                class="popup__input popup__input_type_link-url" 
                minlength="2"
                 required 
                 placeholder="Текст поста"
                 value={this.state.description}
                 onChange={this.handleDescriptionOnchange}
                 
                 />
          
            <span id="link-error" class="error"></span>
            <button type="submit" class="button popup__button  popup__button_valid" onClick={this.createPost} >+</button>
        </form>
      </div>
      
    </div>
    );
}
}