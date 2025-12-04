// import React, { useState } from "react";
// import "./Sidebar.css";
// import { ImCheckboxChecked } from "react-icons/im";
// import { FaGaugeHigh } from "react-icons/fa6";
// import { FaHandPaper } from "react-icons/fa";
// import { FaCircleXmark } from "react-icons/fa6";
// import { FaArchive } from "react-icons/fa";
// import { IoSettingsSharp } from "react-icons/io5";
// import { FaListCheck } from "react-icons/fa6";
// import { FaCogs } from "react-icons/fa";
// import { RiFileTextFill } from "react-icons/ri";
// import { RiLogoutBoxRLine } from "react-icons/ri";

// const NewSideBar = ({ setSelectedMenu }) => {
//   const [isSelected, setIsSelected] = useState("");
//   const handleSelectedMenu = (menu) => {
//     setSelectedMenu(menu);
//     setIsSelected(menu);
//     // console.log(isSelected);
//     // console.log(menu);
//   };

//   const MenuItems = [
//     { label: "Decision", icon: <FaGaugeHigh /> },
//     { label: "Sent", icon: <ImCheckboxChecked /> },
//     { label: "Hold", icon: <FaHandPaper /> },
//     { label: "Closed/Paid", icon: <FaCircleXmark /> },
//     { label: "Archieves", icon: <FaArchive /> },
//     { label: "Settings", icon: <IoSettingsSharp /> },
//     { label: "Auto Submit", icon: <FaListCheck /> },
//     { label: "Auto Settings", icon: <FaCogs /> },
//     { label: "Practice Aging", icon: <RiFileTextFill /> },
//     { label: "MYTSI login", icon: <RiLogoutBoxRLine /> },
//   ];
//   return (
//     <div className="siderbar-list">
//       <div className="list pb-5">
//         <ul className="pb-5">
//           {MenuItems.map((item) => (
//             <li
//               key={item.label}
//               className="li-item p-2"
//               onClick={() => handleSelectedMenu(item.label)}
//               style={
//                 isSelected === item.label
//                   ? { backgroundColor: "#007bff", color: "white" }
//                   : {}
//               }
//             >
//               <span className="mr-2">{item.icon}</span>
//               {item.label}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="logo-img mt-5 pt-5">
//         <img
//           src="./src/assets/SikkaAILogo.png"
//           width={"150px"}
//           className="mt-5 pt-5"
//         />
//       </div>
//     </div>
//   );
// };

// export default NewSideBar;
