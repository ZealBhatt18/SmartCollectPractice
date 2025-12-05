import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Navbar from "./components/Navbar";
import { useCallback, useEffect, useState } from "react";
import Decision from "./components/Decision";
// import axios from "axios";
import Navcomponent from "./components/Navcomponent";
import Sidebar from "./components/Sidebar";
import Settings from "./components/Settings";
import Sent from "./components/Sent";
import Hold from "./components/Hold";
//import NewSideBar from "./components/NewSideBar";

function App() {
  const [sidebaron, setSidebaron] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("Decision");

  useEffect(() => {
    console.log(sidebaron);
    //console.log(selectedMenu);
  }, [sidebaron]);
  // async function getResult() {
  //   try {
  //     let result = await axios.get("https://jsonplaceholder.typicode.com/users");
  //     console.log(result.data);
  //   } catch (error) {
  //     console.error(error.response);
  //   }
  // }
  // const [menuselect,setMenuselect]=useState("")

  // const handleSelectItem =(menu)=>{
  //   setMenuselect(menu);
  //    console.log("this is ",menuselect);
  // }

  // useEffect(() => {
  //   getResult();
  // }, []);

  // useEffect(()=>{
  //  console.log(selectedMenu);
  // },[selectedMenu])
  return (
    <>
      <div className="">
        <div className="header">
          {/* <Navbar handleSelectItem={handleSelectItem}/> */}
          <Navcomponent setSidebaron={setSidebaron} />
        </div>
        <div className="body-content">
          <div className="sidebar">
            {sidebaron === true && (
              <Sidebar setSelectedMenu={setSelectedMenu} />
            )}
          </div>
    <div className="main" style={{width: sidebaron===true?"90%":"100%"}}>
          <div className="main-content mb-5">
            {selectedMenu === "Decision" && <Decision />}
            {selectedMenu === "Sent" && <Sent />}
            {selectedMenu === "Hold" && <Hold />}
            {selectedMenu === "Settings" && <Settings />}
          </div>
          <div className="footer p-2 mt-5 bg-white">
            <span style={{ color: "#007bff" }}>
              Privacy Policy |HIPPA | EULA | Contact | Support
            </span>
            <p>
              Copyright © 2025 Sikka Software Corporation. All Rights Reserved.
            </p>
          </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
