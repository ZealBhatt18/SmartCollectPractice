import Button from "react-bootstrap/Button";
import React from "react";
import Table from "react-bootstrap/Table";

const CommonTable = ({ headers }) => {
  console.log(headers);

  return (
    <div className="pb-5">
      <div className="buttons m-2 mr-3" style={{textAlign:"end"}}>
        <Button className="mr-2">btn 1</Button>
        <Button className="mr-2">btn 2</Button>
        <Button>btn 3</Button>
        </div>
      <Table responsive className="mb-5">
        <thead className="bg-ternary">
          <tr>
            {headers?.map((item, index) => (
              <td key={index}>{item}</td>
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
