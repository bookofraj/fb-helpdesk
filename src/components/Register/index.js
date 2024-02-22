import { useState , useEffect } from 'react'
import '../styles/styles.css'
import { getAuth , createUserWithEmailAndPassword } from 'firebase/auth'
// import { useFirebase } from '../../contexts/firebase'

function Register( {updateAppView , sendFbDetail2App } ) {

  // const firebase = useFirebase();
  // console.log(firebase)

  const auth = getAuth();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [newView, setNewView] = useState()
  useEffect(()=>{
    setNewView('login')
  },[])

  const changeView = () => {
    updateAppView(newView);
  }

  const sendFbDetail = (email, password) => {
    sendFbDetail2App(email, password)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("creating user...");
    
    const result = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      sendFbDetail(email, password)
      const user = userCredential.user;
      console.log("User: ",user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode)
      const errorMessage = error.message;
      console.log(errorMessage)
      alert(errorMessage)
      // ..
    });

    console.log("Success---Result: ",result)
    
  }
  
  return (
    <div className="wrapper">
      <div className="container">
        <h3>Create Account</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="createname">Name</label>
          <input id='createname' type="text" placeholder='Eg. Manoj Kumar' value={name} onChange={(e)=>{setName(e.target.value)}} />
          <label htmlFor="createemail">Email</label>
          <input id='createemail' type="text" placeholder='Eg. manoj@richpanel.com' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
          <label htmlFor="createpswd">Password</label>
          <input id='createpswd' type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <div>
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <input id='submit' type="submit" value="Sign Up" />
        </form>
        <p>Already have an account? <button onClick={changeView}>Login</button></p>
      </div>
    </div>
  )
}

export default Register