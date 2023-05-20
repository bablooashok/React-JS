import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Message name='Ashok'/> */}
      {/* Functional Component */}
      {/* <Greet name='Ashok' nickName='Babloo'>
        <p>This is child prop</p>
      </Greet>
      <Greet name='Jaswanth' nickName='Sunny'>
        <button>Child prop</button>
      </Greet>
      <Greet name='Nirmala' nickName='Bunny' /> */}
      {/* Class Component */}
      {/* <Welcome name='Ashok' nickName='Babloo'>
        <p>this is a child prop</p>
      </Welcome>
      <Welcome name='Jaswanth' nickName='Sunny'>
        <button>child</button>
      </Welcome>
      <Welcome name='Nirmala' nickName='Bunny' /> */}
      {/* JSX */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
