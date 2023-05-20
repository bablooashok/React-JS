import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* Functional Component */}
       <Greet/>
      {/* Class Component */}
       <Welcome/>
    </div>
  );
}

export default App;