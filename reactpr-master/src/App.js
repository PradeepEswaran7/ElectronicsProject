import logo from './logo.svg';
import './App.css';
import HomeComp from './Components/HomeComp';
import RouterComp from './Components/RouterComp';
import CrudComp from './Components/CrudComp';
import Home from '../src/Crud/Laptops/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <RouterComp></RouterComp>
      
    
      
      
      
      
    </div>
  );
}

export default App;
