import React, { useState } from "react";
import axios from 'axios'
import history from '../utils/history'


const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
        [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
    .post('http://localhost:5000/api/login', credentials)
    .then( res => {
      console.log(res.data)
      localStorage.setItem('token', res.data.payload)
      this.props.history.push('/login')
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="username" 
            placeholder="username" 
            onChange={handleChange} 
            value={credentials.username}
          />

          <input 
            type="password" 
            name="password" 
            placeholder="password" 
            onChange={handleChange} 
            value={credentials.password} 
          />
          <button>Log In</button>
        </form>

    </>
  );
};

export default Login;
