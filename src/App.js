import React from 'react';
import Navbar from './Navbar';
import Content from './content';
import './App.css';
import Top from './top';
import Background from './assets/slider21.jpg';
import { GiCctvCamera } from "react-icons/gi";


const App = () => {
  
    
  
  return (
    <div >
      <div className='logo'>        
      <GiCctvCamera className='logoimg'/>
      
          <Top/>
        </div>
      <Navbar/>
      <div style={{
        width: '100%',
        height: '100vh',
        backgroundRepeat: 'no-repeat', 
        backgroundImage: `url(${Background})`
      }}>
        <div>
          <Content/>
        </div>
        
      </div>
      
    </div>
  );
};

export default App;
