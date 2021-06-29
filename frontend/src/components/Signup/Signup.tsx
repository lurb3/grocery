import React from 'react';
import Axios from 'axios'

const Signup = () => {
  const signupUser = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const login = await Axios.post('http://localhost:4000/users', {
      email: "gustavo2@test.pt",
      password: "123456",
    })
    console.log('----', login)
  }
  return (
    <div>
      <h2>Create account</h2>
      <form onSubmit={signupUser}>
        <input type="text" name="email" placeholder="email"/>
        <input type="text" name="password" placeholder="Password"/>
        <input type="submit" name="signup" value="Signup"/>
      </form>
    </div>
  );
}

export default Signup;
