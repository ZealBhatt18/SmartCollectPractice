import { Tab } from 'bootstrap';
import React from 'react'
import Tabs from 'react-bootstrap/esm/Tabs';
import CommonTable from './CommonTable';

const Hold = () => {

     const headerstab1 =["Guar ID","Guarantor Name","Amount Due","Current Balance","Responsible Date","Practice Name","Notes","Sent by"]

  const headerstab2=["Service Type","Client#",'Transmittal#',"Bill/Account Type","Guar ID","Guarantor Name","Amount Paid"," New Balance","Date Sent","Stop Type","Practice Name","Sent by"]
  return (
    <div className="mt-4">
    <Tabs
      defaultActiveKey="Accounts on Hold"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Accounts on Hold">
       <CommonTable headers={headerstab1}/>
      </Tab>
      <Tab eventKey="profile" title="Report Payments on Hold">
              <CommonTable headers={headerstab2}/>

      </Tab>
    </Tabs>
    </div>
  )
}

export default Hold
