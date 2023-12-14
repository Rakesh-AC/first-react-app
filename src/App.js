import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
    <>


      {/* we add navbar component like this  */}
      {/* <Navbar></Navbar> */}
      {/* Also like this */}
      <Navbar title="TextUtils" aboutText="About Us" />
      {/* We can also pass props to the components */}
      {/* <div className="container">
        <TextForm heading='Enter the text to analyze'/>
      </div> */}

      <div className="container mt-4">
        <About />
      </div>

    </>
  );
}

export default App;
