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

function App() {
  const [sidebaron, setSidebaron] = useState(false);
    const[selectedMenu,setSelectedMenu]=useState("")

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
      <div>
        {/* <Navbar handleSelectItem={handleSelectItem}/> */}
        <Navcomponent setSidebaron={setSidebaron} />
        <div className="body">
          <div className="sidebar">
            {sidebaron === true && <Sidebar setSelectedMenu={setSelectedMenu}/>}
          </div>
          <div className="main-content">
            {selectedMenu==="Decision"&& <Decision />}
            {selectedMenu==="Sent" && <Sent/>}
            {selectedMenu==="Hold" && <Hold/>}
            {selectedMenu==="Settings" && <Settings/>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
