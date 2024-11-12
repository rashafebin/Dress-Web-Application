import React, { useState } from 'react'
import './registration.css'
import axios from 'axios'

export default function Registration() {

    const[state,setstate]= useState({
        name:'',
        email:'',
        password:'',
        address:'',
        phone_number:'',
        image:'',
        login_id:localStorage.getItem('login_id')
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
    
        if (state.name=='') {
            error.username = 'enter name'
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

        if (state.phone_number=='') {
            error.phone_number= 'enter number'
        }
        setErrorMessage(error)
    
        return Object.keys(error).length == 0
    
       
    }
    
    
    
    const submit=(event)=> {
        event.preventDefault()
      if(!validate()){
        console.log('error');
        
      }

      const data = new FormData();
      data.append('name',state.name);
      data.append('email',state.email);
      data.append('password',state.password);
      data.append('address',state.address);
      data.append('phone_number',state.phone_number);
      data.append('image',state.image);





    axios.post('http://127.0.0.1:8000/registration/',state).then((response)=>{
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
                        <label  style={{color:errorMessage.username ? 'red' :''}} >{errorMessage.name ? errorMessage.name : 'name'}</label>
                        <input type="text" id="name" name="name" onChange={inputChange} required />

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
                        <label style={{color:errorMessage.phone_number ? 'red' :''}} >{errorMessage.phone_number ? errorMessage.phone_number : 'number'}</label>
                        <input type="password" id="phone_number" name="phone_number" onChange={inputChange} required />

                    </div>
                    <div className="form-group2">
                        <label style={{color:errorMessage.phone_number ? 'red' :''}} >{errorMessage.phone_number ? errorMessage.phone_number : 'number'}</label>
                        <input type="file" id="phone_number" name="image" onChange={(event)=>{setstate({...state, image: event.target.files[0]})}} required />

                    </div>



                    <button type="button" onClick={submit}>Register</button>
                </form>
            </div>
        </div>
    )
}
