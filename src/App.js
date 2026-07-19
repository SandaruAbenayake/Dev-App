import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome to the DevApp!</h1>
       <button className="User-button" onClick={() => navigate ('/users') }>Click Me</button>
      </header>
    </div>
  );
}

export default App;
