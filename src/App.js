import logo from './logo.svg';
import './App.css';
import Home from './Day-1/Home';
import DayNight from './Day-4/DayNight';
import Text from './Day-2/Text';
import Api from './Day-3/Api';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <Home></Home>
    <DayNight></DayNight>
    <Text></Text>
    <Api></Api>
    </>
  );
}

export default App;
