
import React, { useState } from 'react'

import axios from 'axios'


export default function Shopregistration() {
    const[state,setstate]= useState({
        shop_name:'',
        email:'',
        password:'',
        address:'',
        number:'',
        image:''

    })
    console.log(state);
    
    const[errorMessage,setErrorMessage]=useState({})

console.log(errorMessage);


    console.log(state);

    const inputChange=(event)=>{
         const name=event.target.name;
         const value=event.target.value;
         setstate({...state,[name]:value})
            


    }


    const validate=()=>{
        const error = {}
    
        if (state.shop_name=='') {
            error.shop_name = 'enter name'
        }
        if (state.email=='') {
            error.email = 'enter email'
        }
        if (state.password=='') {
            error.password = 'enter password'
        }
        if (state.address=='') {
            error.address= 'enter address'
        }

        if (state.number=='') {
            error.number= 'enter number'
        }
        setErrorMessage(error)
    
        return Object.keys(error).length == 0
    
       
    }
    
    
    
    const submit=(event)=> {
        event.preventDefault()
      if(!validate()){
        console.log('error');
        
      }

    axios.post('http://127.0.0.1:8000/shop_registration',state).then((response)=>{
        console.log('response==>',response);

    }).catch((error)=>{
        console.log('error==>',error);
    }) 
    
    
    console.log ('hai');
        
    }  

  return (
    <div className='body'>

    <div className="container2">
        <h1>Registration Forms</h1>
        <form className="registration-form">
            <div className="form-group">
                <label  style={{color:errorMessage.shop_name ? 'red' :''}} >{errorMessage.shop_name ? errorMessage.shop_name : 'shop_name'}</label>
                <input type="text" id="shop_name" name="shop_name" onChange={inputChange} required />

            </div>

            <div className="form-group2">
                <label style={{color:errorMessage.email ? 'red' :''}} >{errorMessage.email ? errorMessage.email : 'email'}</label>
                <input type="email" id="email" name="email"  onChange= {inputChange} required  />

            </div>

            <div className="form-group2">
                <label style={{color:errorMessage.password ? 'red' :''}} >{errorMessage.password ? errorMessage.password : 'password'}</label>
                <input type="password" id="password" name="password" onChange={inputChange} required />

            </div>

            <div className="form-group2">
                <label style={{color:errorMessage.address ? 'red' :''}} >{errorMessage.adress ? errorMessage.address : 'address'}</label>
                <input type="text" id="adress" name="address" onChange={inputChange} required />

            </div>

            <div className="form-group2">
                <label style={{color:errorMessage.number ? 'red' :''}} >{errorMessage.number ? errorMessage.number : 'number'}</label>
                <input type="password" id="number" name="number" onChange={inputChange} required />

            </div>
  

            <div className="form-group2">
                <label style={{color:errorMessage.number ? 'red' :''}} >{errorMessage.image ? errorMessage.image : 'image'}</label>
                <input type="file" id="number" name="image" onChange={(event)=>{setstate({...state,image:event.target.files[0]})}}/>

            </div>


            <button type="button" onClick={submit}>Register</button>
        </form>
    </div>
</div>
  )
}
