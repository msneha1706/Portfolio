import logo from './logo.svg';
import Navbar from './Component/Navbar'
import About from './Component/About'
import Body from './Component/Body'
import Project from './Component/Project';
import Contact from './Component/Contact'
import AOS from 'aos';

import './App.css';
import { useEffect } from 'react';

function App() {
  
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      disable:'mobile'
    });
  },[])

  return (
    <div className="App">
      <Navbar/>
      <Body/>
      <About/>
      <Project/>
      <Contact/>

    </div>
  );
}

export default App;
