import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { useCallback, useState } from "react";
import Decision from "./components/Decision";

function App() {
  const [activetab, setactivetab] = useState("");

  const handleactivetab = useCallback(
    (menu) => {
      setactivetab(menu);
      console.log("User clicked:", menu);
    },
    [setactivetab]
  );
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const target = e.target;
    const name = e.target.name;
    const value = e.target.type === "checkbox" ? target.checked : target.value;
  };
  const handleSubmit = (event) => {
    let fillings = "";
    if (inputs.tomato) fillings += "tomato";
    if (inputs.onion) {
      if (inputs.tomato) fillings += " and ";
      fillings += "onion";
    }
    if (fillings == "") fillings = "no fillings";
    alert(`${inputs.firstname} wants a burger with ${fillings}`);
    event.preventDefault();
  };
  return (
    <>
      <div className="d-flex">
        <Navbar handleactivetab={handleactivetab} activetab={activetab} />
        {activetab === "Decision" && <Decision />}
      </div>
      <div className="tab">
        <form onSubmit={handleSubmit}>
          <label>
            My name is:
            <input
              type="text"
              name="firstname"
              value={inputs.firstname}
              onChange={handleChange}
            />
          </label>

          <p>I want a burger with:</p>
          <label>
            Tomato:
            <input
              type="checkbox"
              name="tomato"
              checked={inputs.tomato}
              onChange={handleChange}
            />
          </label>
          <label>
            Onion:
            <input
              type="checkbox"
              name="onion"
              checked={inputs.onion}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
