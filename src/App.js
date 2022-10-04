import logo from './logo.svg';
import './App.css';

//importing Greet.js file here
//import Greet from './components/Greet'

//you can also give any name to the component
//import MyComponent from './components/Greet';

import { Greet } from './components/Greet'
import Welcome from './components/Welcome'
import DoThis from './components/JSX'
import Employee from './components/Employee'
import Subscribe from './components/Subscribe'

function App() {
  return (
    <div className="App">
      {/* <Greet></Greet> */}
      {/* <MyComponent></MyComponent> */}

      {/* <Greet></Greet>
      <Welcome></Welcome> */}

      {/* <DoThis></DoThis> */}

      {/* Demo of props */}
      {/* <Employee name="Dhruv" age='21'>
        <p> You are from India.</p>
      </Employee>
      <Employee name="Sina" age='34' />
      <Employee name="Clark" age='15' /> */}

      {/* demo of this keyword with props */}
      {/* <Welcome name='Dhruv' />
      <Welcome name='Sina' /> */}

      <Subscribe />
    </div>
  );
}

export default App;
