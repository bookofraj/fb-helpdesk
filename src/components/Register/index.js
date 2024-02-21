import React from 'react'
import '../styles/styles.css'

function Register() {
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
        <p>Already have an account? Login</p>
      </div>
    </div>
  )
}

export default Register