import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome to the DevApp!</h1>
       <button className="User-button" onClick={() => alert('Button clicked!')}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
