import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWIthAuth";
import useForm from 'react-hook-form'

const Login = (props) => {
  console.log('loginProps', props)

  const { register, handleSubmit, watch, errors } = useForm()
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const onSubmit = (data) => {
    axiosWithAuth()
    .post('/api/login', data)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.payload)
      props.history.push('/colors')
    })
    .catch(err => {
      console.log(err)
    })
  }
  

  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center',
        margin: '0 auto',
        flexDirection: 'column'
      }}
    >
      <h1>Welcome to the Bubble App!</h1>
      <div >
        <form onSubmit={handleSubmit(onSubmit)}>
          <input 
            type="text" 
            name="username" 
            placeholder="username"
            ref={register}
            />
          <input 
            type="password" 
            name="password" 
            placeholder="password"
            ref={register}
          />

          <button style={{margin: '20px 0 0'}}>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;