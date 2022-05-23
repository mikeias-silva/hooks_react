import React, {useState} from 'react';
import './App.css';
import EntradaDado from './components/EntradaDado';
import SaidaDado from './components/SaidaDado';

function App() {
  const [username, setUsername] = useState("Maujor");
  return (
    <div className="App">
      <EntradaDado username={username} setUsername={setUsername}/>
      <SaidaDado username={username}/>
    </div>
  );
}

export default App;
