import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsList } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { FaGaugeHigh } from "react-icons/fa6";
import { TbSelect } from "react-icons/tb";
import { FaHandPaper } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { FaBoxArchive } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { FaListCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import "./Sidebar.css";

const Sidebar = ({onMenuSelect }) => {
  const [show, setShow] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const handleShow = () => setShow(!show);

  const handleMenuClick=(menuName)=>{
      setActiveMenu(menuName); // update local state
     if (onMenuSelect) {
    onMenuSelect(menuName); // send it to parent
  }
  }
  return (
    <div className="mt-1">
      <Button variant="#0373b5" onClick={handleShow}>
        <BsList size={30} color="white" />
      </Button>
      <Offcanvas show={show}>
        <Offcanvas.Body>
          <div className="list">
            <div className="list-items">
              <ul className="list-unstyled">
                <li className="li">
                  <FaGaugeHigh />
                  <span
                    className="ml-1"
                    onClick={() => handleMenuClick("Decision")}
                  >
                    Decision
                  </span>
                </li>
                <li className="li">
                  <TbSelect />
                  <span className="ml-1" onClick={() => handleMenuClick("Sent")}>
                    Sent
                  </span>
                </li>
                <li className="li">
                  <FaHandPaper />
                  <span className="ml-1" onClick={() => handleMenuClick("Hold")}>
                    Hold
                  </span>
                </li>
                <li className="li">
                  <IoCloseCircle />
                  <span
                    className="ml-1"
                    onClick={() => handleMenuClick("Close/Paid")}
                  >
                    Close/Paid
                  </span>
                </li>
                <li className="li">
                  <FaBoxArchive />
                  <span
                    className="ml-1"
                    onClick={() => handleMenuClick("Archieves")}
                  >
                    Archieves
                  </span>
                </li>
                <li className="li">
                  <CiSettings />
                  <span
                    className="ml-1"
                    onClick={() => handleMenuClick("Settings")}
                  >
                    Settings
                  </span>
                </li>
                <li className="li">
                  <FaListCheck />
                  <span
                    className="ml-1"
                    onClick={() => handleMenuClick("Auto Submit")}
                  >
                    Auto Submit
                  </span>
                </li>
                <li className="li">
                  <FaRegCircle />
                  <span
                    className="ml-1"
                    onClick={() => handleMenuClick("Auto Settings")}
                  >
                    {" "}
                    Auto Settings
                  </span>
                </li>
                <li className="li">
                  <FaFileAlt />
                  <span
                    className="ml-1"
                    onClick={() => handleMenuClick("Practice Aging")}
                  >
                    Practice Aging
                  </span>
                </li>
                <li className="li">
                  <MdLogin />
                  <span
                    className="ml-1"
                    onClick={() => handleMenuClick("MYTSI login")}
                  >
                    MYTSI login
                  </span>
                </li>
              </ul>
            </div>
            <div className="sikka-logo text-center">
              <img
                src="./src/assets/SikkaAILogo.png"
                alt=""
                width={100}
                style={{ marginTop: "25rem" }}
              />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
