import React from 'react'
import './login.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Login() {
    const navigate = useNavigate()

const [state,setState] = useState({
    email:'',
    password:''
})

const[errorMessage,setErrorMessage]=useState({})


console.log(errorMessage);

const inputChange = (event)=>{
    console.log(event);
    const name = event.target.name;
    const value =event.target.value;
    setState({...state,[name]:value})
}




const validate=()=>{
    const error = {}

    if (state.email=='') {
        error.email= 'enter email'
    }
    if (state.password=='') {
        error.password = 'enter password'
    }
    setErrorMessage(error)

    return Object.keys(error).length == 0

   
}



const submit=()=> {
  if(!validate()){
    console.log('error');
    
  }
  axios.post('http://127.0.0.1:8000/login/',state).then((response)=>{
    console.log('response==>',response);
    localStorage.setItem('role',response.data.data.role)
    localStorage.setItem('login_id',response.data.data.login_id)
    localStorage.setItem('user_id',response.data.data.user_id)
    localStorage.setItem('shop_id',response.data.data.shop_id)

    navigate('/home')

}).catch((error)=>{
    console.log('error==>',error);
}) 


console.log ('hai');
    
    
}  

    return (
        <div className='body'>

            <div className="login-container1">
                <h2>Login</h2>
                <div className="login-group1">
                    <label style={{color:errorMessage.email ? 'red' :''}} >{errorMessage.email? errorMessage.username : 'email'}</label>
                    <input type="text" id="email" name="email" required=""  onChange={inputChange}/>
                </div>
                <div className="login-group1">
                    <label  style={{color:errorMessage.username ? 'red' :''}}  >{errorMessage.password ? errorMessage.password : 'Password'}</label>
                    <input type="password" id="password" name="password" required="" onChange={inputChange} />
                </div>
                <div className="login-group1">
                    <button type="submit" onClick={submit}>Login</button>
                </div>
            </div>
        </div>
    )
}
