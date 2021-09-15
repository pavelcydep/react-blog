import {Typography} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import React from 'react';
import {MainContainer} from './MainContainer';
import {Input} from './Input';
import {useForm} from 'react-hook-form';
import {Form} from './Form';
import { PrimaryButton } from './PrimaryButton';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useData,DataProvider} from '../DataContext';
const schema = yup.object().shape({
    firstName: yup
    .string()
    .matches(/^([^0-9]*)$/,'Это поле не должно содержать цифр')
    .required("Это обязательное поле"),

    
        lastName: yup
        .string()
        .matches(/^([^0-9]*)$/,'Это поле не должно содержать цифр')
        .required("Это обязательное поле")});

export const PopupEdit = (props) => {

    const history = useHistory()
    const {data, setValues} = useData()
       const {
           register,
           handleSubmit,
           formState: { errors },
         } = useForm({
             defaultValues:{firstName:data.firstName,lastName:data.lastName},
             mode:"onBlur",
           resolver: yupResolver(schema),
   
         });
   
   
       //получаем обЪект введенных данных
   const onSubmit=(data)=>{
     
     setValues(data)
       async function postData() {
        // Default options are marked with *
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/201', {
          method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(
            data
          ) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
      }
      
      postData()
        .then((data) => {
          console.log(data); // JSON data parsed by `response.json()` call
        });
      
   }
   
  

       return <MainContainer >
           <Typography component = "h2"
       variant = "h5" >
           Step 1 
           </Typography> 
           <Form name="name" title="Редактировать профиль" isOpen={props.isOpen}  onClose={props.onClose} onSubmit = {handleSubmit(onSubmit)}>
           <Input 
         
           {...register('firstName')}
       id = "firstName"
       type = "text"
       label = "Полное имя"
       name = "firstName" 
       error={ !!errors.firstName}
       helperText={errors?.firstName?.message}
       >
   
           </Input> 
           <Input 
           
           {...register('lastName')}
       id = "lastName"
       type = "text"
       label = "Профессия"
       name = "lastName" 
       error={!!errors.lastName}
       helperText={errors?.lastName?.message}
       >
   
   
           </Input> 
   <PrimaryButton>
       кнопка
   </PrimaryButton>
   
           </Form> 
           </MainContainer>
}