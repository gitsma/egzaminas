import React from 'react'
import { useState } from "react";
import styles from '../components/RegisterForm.css'
import userService from '../services/userService';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


const RegisterForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      const RegisterForm = {
        name: name,
        email: email,
        password: password,
      }
      userService.registerUser(RegisterForm);

      setName('');
      setEmail('');
      setPassword('');
      console.log(RegisterForm);

      navigate('/login');
    }
  
  
  return (
  <div className="registerbody">
    <div className="registerForm" >
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>

          <div className="formcontrol">
            <input type="text" required
            value={name}
            onChange={(e) => {setName(e.target.value)}}
            />
            <label>Name</label> 
          </div>

          <div className="formcontrol">
            <input type="text" required
            value={email}
            onChange={(e) => {setEmail(e.target.value)}} />
            <label>Email</label>
          </div>
  
          <div className="formcontrol">
            <input type="password" required
            value={password}
            onChange={(e) => {setPassword(e.target.value)}} />
            <label>Password</label>
          </div>
  
          <button 
          className="btn" 
          type="submit" 
          >Register</button>
  
          <p className="text">Do already have an account? <Link to="/login">Login</Link> </p>
          </form>
        </div>
       
      </div>
  )
}


export default RegisterForm