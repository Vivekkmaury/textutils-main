import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

  const [mode,setMode] = useState('light') //when dark mode is enabled or not
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type
     })
     setTimeout(()=>{
     setAlert(null);
     },1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042f50';
      showAlert(" Dark mode has been enabled","Success")
      document.title='TextUtils - Dark Mode';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light mode has been enabled","Success")
      document.title='TextUtils - Light Mode';

    }
  }

  return (
  <>
  {/* <Router> */}
    <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode} aboutText=" About TextUtils"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Routes>
            <Route exact path="/about" element={<About />}>
            </Route> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}> */}
            <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
            {/* </Route>
    </Routes> */}
    </div>
  {/* </Router> */}
  </>
  );
}
 
export default App;
 