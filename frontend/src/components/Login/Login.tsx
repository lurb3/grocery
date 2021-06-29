import React from 'react';
import Axios from 'axios'

const Login = () => {
  const authUser = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    await Axios.post('http://localhost:4000/auth', {
      email: "gustavo@test.pt",
      password: "123456",
    })
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={authUser}>
        <input type="text" name="email" placeholder="email"/>
        <input type="text" name="password" placeholder="Password"/>
        <input type="submit" name="signup" value="Signup"/>
      </form>
    </div>
  );
}

export default Login;
