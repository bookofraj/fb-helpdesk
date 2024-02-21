import './App.css';

import Register from './components/Register';
import Login from './components/Login';
import ConnectPages from './components/ConnectPages';
import DisconnectPages from './components/DisconnectPages';
import AgentScreen from './components/AgentScreen';

import { useContext, useEffect } from 'react';
import StateContext from './contexts/states/StatesContext';


function App() {
  const store = useContext(StateContext);
  
  useEffect(()=>{
    store.handleShowRegister();
    // eslint-disable-next-line
  },[])
  // const view = store.show;

  return (
    <div className="App">
      {store.show === 'register' ? <Register /> : null}
      {store.show === 'login' ? <Login /> : null}
      {store.show === 'connect_pages' ? <ConnectPages /> : null}
      {store.show === 'disconnect_pages' ? <DisconnectPages /> : null}
      {store.show === 'agent_screen' ? <AgentScreen /> : null}
    </div>
  );
}

export default App;
