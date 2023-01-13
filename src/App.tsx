import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BasicTypeProps from './components/BasicTypeProps';
import Home from './components/Home';
import Hooks from './components/Hooks';



function App() {

  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/basictypeprops' element={<BasicTypeProps />} />
            <Route path='/hooks' element={<Hooks />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
