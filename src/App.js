import { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/textform";
//import About from "./components/about";
import Alert from "./components/alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const initAlert = (msg, type)=>{
    setAlert({
      msg:msg,
      type:type,
    });
    setTimeout(()=>{
      setAlert(null);
  },2000);

  }

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      
      
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#1e2328";
      document.body.style.color = "#ffffff";
      
     
    }
  };
  return (
    <div>
      <Navbar
        About="About"
        Heading="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        
      />
      <div  style={{minHeight:' 58px'}}><Alert alert={alert} /></div>
      <Textform mode={mode} initAlert={initAlert}/>
      {/* <About mode={mode}/> */}
    </div>
  );
}

export default App;
