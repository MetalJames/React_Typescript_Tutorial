import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BasicTypeProps from './components/BasicTypeProps';
import Home from './components/Home';



function App() {

  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/basictypeprops' element={<BasicTypeProps />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
