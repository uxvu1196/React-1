import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React from 'react';
import About from './components/About';
import Service from './components/Service';

const userName = 'Mickey'
let isLogged = true
const styles = {
  color:'tomato',
  fontSize:'40px',
}

function App() {
  return (
    <div className="App">
      {
        <div>
        <Header></Header>
        <About></About>
        <Service></Service>
        <h1 className="gold">Hello World</h1>
        <h1>Hello {userName}</h1>
        <h2 style={{textDecoration: 'underline'}}>some Test
        </h2>
        <h1 style={styles}>
          the user {userName} is logged 
          {
            isLogged === true ? 'In' : 'Out'
          }
        </h1>
        </div>
        }
    </div>
  );
}

export default App;
