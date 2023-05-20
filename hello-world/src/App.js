import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      {/* Functional Component */}
       <Greet/>
      {/* Class Component */}
       <Welcome/>
      {/* JSX */}
      <Hello/>
    </div>
  );
}

export default App;
