
import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter,
  link,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  const[mode,setmode]=useState('light');
  const[alert,setalert]=useState(null);

   const showAlert=(message,type)=>{
    setalert({
      msg:message,
      typ:type

    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }
 
 
  const toggle=()=>{
     if(mode==='light')
     {
      setmode('dark')
      document.body.style.backgroundColor='#067a97'
      document.body.style.color='white'
      showAlert('Dark Mode Enabled','success')
     }else
     {
      setmode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert('Light Mode Enabled','success')
     }
     
  }  
  
  return (
  <> 
        <BrowserRouter>
          <Navbar title="Hakimi Dry Fruits" mode={mode} toggleMode={toggle}   />
          <Alert  alert={alert}/>
      <div className="container my-3" >
          <Routes>
            <Route exact path="/" element={<Form heading="Enter Text Here"  mode={mode} showAlert={showAlert}/>} />
            <Route exact path="/about" element={<About/>} />
          </Routes>
      </div>
        </BrowserRouter> 
  </>
   
  );
}

export default App;
