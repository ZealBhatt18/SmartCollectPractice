import React, { useState } from "react";
import "./Sidebar.css";
import { ImCheckboxChecked } from "react-icons/im";
import { FaGaugeHigh } from "react-icons/fa6";
import { FaHandPaper } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { FaArchive } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaListCheck } from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";
import { RiFileTextFill } from "react-icons/ri";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Sidebar = ({ setSelectedMenu }) => {
  const [isSelected, setIsSelected] = useState("Decision");
  const handleSelectedMenu = (menu) => {
    setSelectedMenu(menu);
    setIsSelected(menu);
    // console.log(isSelected);
    // console.log(menu);
  };
  return (
    <>
      <div className="sidebar-list">
        <div className="list pb-5">
          <ul className="pb-5">
            {isSelected === "Decision" ? (
              <li
                className="li-item p-3"
                onClick={() => handleSelectedMenu("Decision")}
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                <FaGaugeHigh className="mr-2" />
                Decison
              </li>
            ) : (
              <li
                className="li-item p-3"
                onClick={() => handleSelectedMenu("Decision")}
              >
                <FaGaugeHigh className="mr-2" />
                Decison
              </li>
            )}
            {isSelected === "Sent" ? (
              <li
                className="li-item p-3"
                onClick={() => handleSelectedMenu("Sent")}
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                <ImCheckboxChecked className="mr-2" />
                Sent
              </li>
            ) : (
              <li
                className="li-item p-3"
                onClick={() => handleSelectedMenu("Sent")}
              >
                <ImCheckboxChecked className="mr-2" />
                Sent
              </li>
            )}
            {isSelected === "Hold" ? (
              <li
                className="li-item p-3"
                onClick={() => handleSelectedMenu("Hold")}
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                <FaHandPaper className="mr-2" />
                Hold
              </li>
            ) : (
              <li
                className="li-item p-3"
                onClick={() => handleSelectedMenu("Hold")}
              >
                <FaHandPaper className="mr-2" />
                Hold
              </li>
            )}
            {isSelected === "Closed/Paid" ? (
              <li
                className="li-item p-3"
                onClick={() => handleSelectedMenu("Closed/Paid")}
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                <FaCircleXmark className="mr-2" />
                Closed/Paid
              </li>
            ) : (
              <li
                className="li-item p-3"
                onClick={() => handleSelectedMenu("Closed/Paid")}
              >
                <FaCircleXmark className="mr-2" />
                Closed/Paid
              </li>
            )}
            {isSelected === "Archieves" ? (
              <li
                className="li-item p-3"
                onClick={() => handleSelectedMenu("Archieves")}
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                <FaArchive className="mr-2" />
                Archieves
              </li>
            ) : (
              <li
                className="li-item p-3"
                onClick={() => handleSelectedMenu("Archieves")}
              >
                <FaArchive className="mr-2" />
                Archieves
              </li>
            )}
            {isSelected === "Settings" ? (
              <li
                className="li-item p-3"
                onClick={() => handleSelectedMenu("Settings")}
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                <IoSettingsSharp className="mr-2" />
                Settings
              </li>
            ) : (
              <li
                className="li-item p-3"
                onClick={() => handleSelectedMenu("Settings")}
              >
                <IoSettingsSharp className="mr-2" />
                Settings
              </li>
            )}
            {isSelected === "Auto Submit" ? (
              <li
                className="li-item p-3"
                onClick={() => handleSelectedMenu("Auto Submit")}
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                <FaListCheck className="mr-2" />
                Auto Submit
              </li>
            ) : (
              <li
                className="li-item p-3"
                onClick={() => handleSelectedMenu("Auto Submit")}
              >
                <FaListCheck className="mr-2" />
                Auto Submit
              </li>
            )}
            {isSelected === "Auto Settings" ? (
              <li
                className="li-item p-3"
                onClick={() => handleSelectedMenu("Auto Settings")}
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                <FaCogs className="mr-2" />
                Auto Settings
              </li>
            ) : (
              <li
                className="li-item p-3"
                onClick={() => handleSelectedMenu("Auto Settings")}
              >
                <FaCogs className="mr-2" />
                Auto Settings
              </li>
            )}
            {isSelected === "Practice Aging" ? (
              <li
                className="li-item p-3"
                onClick={() => handleSelectedMenu("Practice Aging")}
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                <RiFileTextFill className="mr-2" />
                Practice Aging
              </li>
            ) : (
              <li
                className="li-item p-3"
                onClick={() => handleSelectedMenu("Practice Aging")}
              >
                <RiFileTextFill className="mr-2" />
                Practice Aging
              </li>
            )}
            {isSelected === "MYTSI login" ? (
              <li
                className="li-item p-3 mb-5"
                onClick={() => handleSelectedMenu("MYTSI login")}
                style={{ backgroundColor: "#007bff", color: "white" ,borderBottom:"0"}}
              >
                <RiLogoutBoxRLine className="mr-2" />
                MYTSI login
              </li>
            ) : (
              <li
                className="li-item p-3 mb-5"
                onClick={() => handleSelectedMenu("MYTSI login")}
                style={{borderBottom:"0"}}
              >
                <RiLogoutBoxRLine className="mr-2" />
                MYTSI login
              </li>
            )}
          </ul>
        </div>
      <div className="logo-img">
        <img
          src="./src/assets/SikkaAILogo.png"
          width={"200px"}
          className="mt-5 pt-5 p-1"
        />
      </div>
      </div>
    </>
  );
};

export default Sidebar;
