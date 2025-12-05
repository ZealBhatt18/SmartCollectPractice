import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CommonTable from "./CommonTable";
const Sent = () => {
  const headerstab1 = [
    "Service Type",
    "Client#",
    "Transmittal #",
    "Bill/Account Type",
    "Guar ID",
    "Guarantor Name",
    "Amount Due",
    "Responsible Date",
    "Date Sent",
    "Practice Name",
    "Notes",
    "Sent by",
  ];

  const headerstab2 = [
    "Service Type",
    "Client#",
    "Transmittal#",
    "Bill/Account Type",
    "Guar ID",
    "Guarantor Name",
    "Amount Paid",
    " New Balance",
    "Date Sent",
    "Stop Type",
    "Practice Name",
    "Sent by",
  ];
  return (
    <div className="p-4">
      <div
        className="decision p-2 mb-5"
        style={{ borderTop: "3px solid #007bff", backgroundColor: "white" }}
      >
        <h6 className="mb-3">Decision</h6>
        <div className="tabs">
          <Tabs
            defaultActiveKey="tab1"
            id="Accounts Submitted"
            className="mb-3"
          >
            <Tab
              eventKey="tab1"
              title="Accounts Submitted"
              style={{ border: "1px solid gray" }}
            >
              <div className="tab-content mb-5">
                <CommonTable headers={headerstab1} />
              </div>
            </Tab>
            <Tab eventKey="tab2" title="Payments / Stop Submitted">
              <div className="tab-content mb-5">
                <CommonTable headers={headerstab2} />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Sent;
