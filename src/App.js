import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';

function App() {
  const [mode , setMode ] = useState('white');
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = '#27424a';
    }else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>

      {/* we add navbar component like this  */}
      {/* <Navbar></Navbar> */}
      {/* Also like this */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      {/* We can also pass props to the components */}
      <div className="container">
        <TextForm heading='Enter the text to analyze'/>
      </div>

      {/* <div className="container mt-4">
        <About />
      </div> */}

    </>
  );
}

export default App;
