import React from 'react'
import { useState, useEffect } from 'react'
import '../styles/styles.css'
import { LoginSocialFacebook } from 'reactjs-social-login'
// import { useFirebase } from '../../contexts/firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

function Login({ updateAppView, fbEmail, fbPass , sendToken2App }) {

    // const firebase = useFirebase();
    // console.log(firebase)

    const auth = getAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [newView, setNewView] = useState()
    useEffect(() => {
        setNewView('register')
    }, [])

    const changeView = () => {
        updateAppView(newView);
    }

    const shareToken = (tochan) => {
        sendToken2App(tochan)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Signing in a user...");
        const result = await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Err Code: ", errorCode)
                console.log("err Msg: ", errorMessage)
                alert(errorMessage)
                // ..
            });
        ;
        console.log("Successfull", result);
    };

    // eslint-disable-next-line
    const [profile, setProfile] = useState();
    function handleResolve(response){
        setProfile(response.data);
        console.log("Profile: ",response.data);
        console.log("tokent at login: ",response.data.accessToken);
        shareToken(response.data.accessToken);
      }
      
      function handleReject(error){
        console.log("Error: ",error);
        alert(error)
      }

    return (
        <div className="wrapper">
            <div className="container">
                <h3>Login to your account</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="createemail">Email</label>
                    <input id='createemail' type="text" placeholder='Eg. manoj@richpanel.com' value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="createpswd">Password</label>
                    <input id='createpswd' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div>
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Remember Me</label>
                    </div>

                    <LoginSocialFacebook
                        appId='1240592600043032'
                        onResolve={handleResolve}
                        onReject={handleReject}>
                        <input id='submit' type="submit" value="Login" />
                    </LoginSocialFacebook>

                </form>
                <p>New to MyApp? <button onClick={changeView}>Sign Up</button></p>
            </div>
        </div>
    )
}

export default Login