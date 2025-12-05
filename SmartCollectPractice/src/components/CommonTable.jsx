import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const CommonTable = ({ headers }) => {

  const[searchValue,setSearchValue]=useState("")
  const filteredHeader=headers.filter(row => Object.values(row).join(" ").toLowerCase().includes(searchValue.toLowerCase()))
 // console.log(headers);
 const handleChange=(e)=>{
   setSearchValue(e.target.value)
  //  for(i=0;i<headers.length;i++){
  //  }
  
 }
//  console.log(searchValue);
 
 
  return (
    <div className="pb-5">
      <div className="m-2 mr-3" style={{display:"flex", justifyContent:"space-between"}}>
        <input type="input" className="input" onChange={handleChange}/>
        <div className="buttons">
        <Button className="mr-2">btn 1</Button>
        <Button className="mr-2">btn 2</Button>
        <Button>btn 3</Button></div>
        </div>
      <Table responsive className="mb-5">
        <thead className="bg-ternary">
          <tr>
            <td><input type="checkbox"/></td>
            {filteredHeader?.map((item, index) => (
              <td key={index}><b>{item}</b></td>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CommonTable;
