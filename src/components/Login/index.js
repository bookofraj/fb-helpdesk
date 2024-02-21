import React from 'react'
import '../styles/styles.css'

function Login() {
    return (
        <div className="wrapper">
            <div className="container">
                <h3>Login to your account</h3>
                <form action="">
                    <label htmlFor="createemail">Email</label>
                    <input id='createemail' type="text" placeholder='Eg. manoj@richpanel.com'/>
                    <label htmlFor="createpswd">Password</label>
                    <input id='createpswd' type="password" />
                    <div>
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember Me</label>
                    </div>
                    <input id='submit' type="submit" value="Login"/>
                </form>
                <p>New to MyApp? <button to='/'>Sign Up</button></p>
            </div>
        </div>
    )
}

export default Login