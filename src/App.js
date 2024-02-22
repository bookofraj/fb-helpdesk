import './App.css';

import Register from './components/Register';
import Login from './components/Login';
import ConnectPages from './components/ConnectPages';
import DisconnectPages from './components/DisconnectPages';
import AgentScreen from './components/AgentScreen';

// eslint-disable-next-line
import { useContext, useEffect, useState } from 'react';
import StateContext from './contexts/states/StatesContext';


function App() {
  // eslint-disable-next-line
  const store = useContext(StateContext);
  
  const [fbEmail, setFbEmail] = useState(null)
  const [fbPass, setFbPass] = useState(null)
  const handleFbDetail = (email, password) => {
    setFbEmail(email)
    setFbPass(password)
    setView('login')
    // console.log("FbEmail: ",fbEmail)
    // console.log("FbPass: ",fbPass)
  }

  const [token, setToken] = useState(null);
  const handleToken = (x) => {
    setToken(x);
    console.log("At App & Access Token: ",token);
    setView('connect_pages');
  }

  
  const [view, setView] = useState('register');
  const updateView = (newView) => {
    setView(newView);
  };
  


  return (
    <div className="App">
      {view === 'register' ? <Register updateAppView={updateView} sendFbDetail2App={handleFbDetail}/> : null}
      {view === 'login' ? <Login updateAppView={updateView} fbEmail={fbEmail} fbPass={fbPass} sendToken2App={handleToken}/> : null}
      {view === 'connect_pages' ? <ConnectPages updateAppView={updateView}/> : null}
      {view === 'disconnect_pages' ? <DisconnectPages updateAppView={updateView}/> : null}
      {view === 'agent_screen' ? <AgentScreen updateAppView={updateView}/> : null}
    </div>
  );
}

export default App;
