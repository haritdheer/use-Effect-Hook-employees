import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About'
import Error from './components/Error';
import './App.css';
import React,{useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {



  return (
    <Router>
    <div className="App">
      <Header/>
    
     <Routes>
          <Route path="/" element={ <Home/>} />
         
          
          <Route path="/about" element={<About/>}/>
            
      
          <Route path="/contact" element={<Contact/>}/>

          <Route path="*" element={<Error/>}/>
           
          
        </Routes>
    </div>
    </Router>
  );
}

export default App;
