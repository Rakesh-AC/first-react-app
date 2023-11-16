import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';

function App() {
  return (
    <>


      {/* we add navbar component like this  */}
      {/* <Navbar></Navbar> */}
      {/* Also like this */}
      <Navbar title="TextUtils" aboutText="About Us" />
    </>
  );
}

export default App;
