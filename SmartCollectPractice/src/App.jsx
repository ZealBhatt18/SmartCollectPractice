import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
    const[activeTab, setActiveTab]= useState("")
  
      const handleMenuSelect = (menu) => {
      console.log("User clicked:", menu);
      setActiveTab(menu); 
    }
  return (
    <>
      <div>
        <Navbar onMenuSelect={handleMenuSelect}/>
      </div>
      <div className="tab">
        
      </div>
    </>
  );
}

export default App;


