import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import ConnectPages from './components/ConnectPages';
import DisconnectPages from './components/DisconnectPages';
import AgentScreen from './components/AgentScreen';

function App() {
  return (
    <div className="App">
      <Register />
      <Login />
      <ConnectPages />
      <DisconnectPages />
      <AgentScreen />
    </div>
  );
}

export default App;
