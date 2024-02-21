import '../styles/styles.css'

import React, { useContext } from 'react'
import StateContext from '../../contexts/states/StatesContext';

function Register() {

  const store = useContext(StateContext);
  
  return (
    <div className="wrapper">
      <div className="container">
        <h3>Create Account</h3>
        <form action="">
          <label htmlFor="createname">Name</label>
          <input id='createname' type="text" placeholder='Eg. Manoj Kumar' />
          <label htmlFor="createemail">Email</label>
          <input id='createemail' type="text" placeholder='Eg. manoj@richpanel.com' />
          <label htmlFor="createpswd">Password</label>
          <input id='createpswd' type="password" />
          <div>
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <input id='submit' type="submit" />
        </form>
        <p>Already have an account? <button onClick={store.handleShowLogin()}>Login</button></p>
      </div>
    </div>
  )
}

export default Register