import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode , setMode ] = useState('white');
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = '#27424a';
      showAlert("Dart mode as been enabled", "success");
      document.title = "TextUtils- Dark mode";

    }else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode as been enabled", "success")
      document.title = "TextUtils- Light mode";
    }

    
  }


  const [alert , setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message:message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000)

    setTimeout(() => {
      document.title = "TextUtils- Download"
    }, 2000)
    
  
  }

  return (
    <>

      {/* we add navbar component like this  */}
      {/* <Navbar></Navbar> */}
      {/* Also like this */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      {/* We can also pass props to the components */}
      <Alert alert={alert} />
      <div className="container">
        <TextForm showAlert={showAlert} heading='Enter the text to analyze' alert={alert}   />
      </div>

      {/* <div className="container mt-4">
        <About />
      </div> */}

    </>
  );
}

export default App;
