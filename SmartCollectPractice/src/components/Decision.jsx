import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CommonTable from "./CommonTable";
const Decision = () => {

  const headerstab1 =["Service Type","Client#","Guarantor Name","Total Balance", "Insurance Owes","Send to TSI","Guarantor Owes","Responsible Date","Date of last service","Date of last Payment/Amount","Billing Method","Practice Name","Notes"]

  const headerstab2=["Client#",'Transmittal#',"Guar ID","Guarantor Name","Amount Paid"," New Balance","Stop Type"]
  return (
    <div className="p-4">
    <div className="decision p-2 mb-5" style={{borderTop:"3px solid #007bff" , backgroundColor:"white"}}>
      <h6 className="mb-3">Decision</h6>
      <div className="tabs">
        <Tabs
          defaultActiveKey="tab1"
          id="Submit New Accounts for Accelerator"
          className="mb-3"
        >
          <Tab eventKey="tab1" title="Submit New Accounts for Accelerator" style={{border:"1px solid gray"}}>
            <div className="tab-content mb-5">
              <CommonTable headers={headerstab1}/>
            </div>
          </Tab>
          <Tab eventKey="tab2" title="Report Payments">
            <div className="tab-content mb-5">
              <CommonTable headers={headerstab2}/>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
    </div>
  );
};

export default Decision;
