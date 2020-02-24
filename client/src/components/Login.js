import React from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
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
        <form action="">
          <input type="text" name="name" placeholder="name"/>
          <input type="text" name="password" placeholder="password"/>
        </form>
      </div>
    </div>
  );
};

export default Login;