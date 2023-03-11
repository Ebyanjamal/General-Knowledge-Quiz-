import React from "react";
import "./Login.css";
import {useState} from 'react'
import { useNavigate } from "react-router-dom";


function Login({ updateUser }) {
    const [formData, setFormData] = useState({
        username:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const {email, password} = formData;

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            email,
            password
        }
        fetch(`/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(user => {
                    navigate("/")
                    updateUser(user)
                })
            } else {
                res.json().then(json => setErrors(json.error))
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
  return (
    <div className="cover">
      <h2>Login</h2>

      <div className="form-group">
        <label htmlFor="email"> Email Address</label>
        <input 
        type="email"
        
        
        ></input>
      </div>

      <div className="form-group">
        <label htmlFor="password"> Password</label>
        <input type="password"></input>
      </div>
      <button type="submit"> SIGN IN </button>
    </div>
  );
}

export default Login;
