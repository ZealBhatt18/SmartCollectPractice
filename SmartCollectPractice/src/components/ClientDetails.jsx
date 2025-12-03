import React, { useEffect, useState } from "react";
import { useAuth } from "../storeInfo/useAuth";
import TableControl from "./TableControl";
import { ApiCalls } from "../apiCall/apiAll";

const ClientDetails = (props) => {

    const { user, logout, isAuthenticated, userDetails, practiceDetails } = useAuth();


    const [isLoading, setIsloading] = useState(false);
    const [data, setData] = useState([]);
    const [dataRP, setDataRP] = useState([]);

    const serviceCode2 = [
        { value: "0", label: "Diplomatic" },
        { value: "1", label: "Intensive" },
        { value: "2", label: "Bad Checks" },
        { value: "3", label: "Collections" },
    ];

    const StopTypelist = [
        { value: "0", label: "Paid in Full" },
        { value: "1", label: "Paid in Full - Send Thank You Letter" },
        { value: "2", label: "Partial Payment" },
        { value: "3", label: "Non-payment Debit Adjustment" },
        { value: "4", label: "Non-payment Credit Adjustment" },
        { value: "5", label: "Cancel Service" },
        { value: "6", label: "Suspend Service" },
        { value: "7", label: "Reinstate Service" },
    ];

    const servicelist = [
        { value: '0', label: "Accelerator" },
        { value: "1", label: "Profit Recovery" },
        { value: "2", label: "Collections" }
    ];

    let configArray = [
        // { id: 1, field: "selected", header: "Select", editable: false, width: "35px", typeInput: "checkbox", domainWiseShowHide: true, dBusiness: true, dvet: true , format: ""},
        { id: 1, field: "practiceid", header: "Practice ID", editable: false, width: "35px", typeInput: "", domainWiseShowHide: true, dBusiness: true, dvet: true , format: "" },
        { id: 2, field: "practicename", header: "Practice Name", editable: false, width: "60px", typeInput: "", domainWiseShowHide: true, dBusiness: true, dvet: true , format: ""},
        { id: 3, field: "AcceleratorClientNo", header: "Accelerator Client #", editable: false, width: "60px", typeInput: "", domainWiseShowHide: true, dBusiness: true, dvet: true , format: ""},
        { id: 4, field: "ProfitRecoveryClientNo", header: "Profit Recovery / Collection Client #", editable: false, width: "60px", typeInput: "", domainWiseShowHide: true, dBusiness: true, dvet: true , format: ""},
    ];

    const [columns, setColumns] = useState();

    const domainType = userDetails.profiles[0].profile_type // getting the domain name

    const [serviceNameSelected, setServiceNameSelected] = useState(servicelist[0].label);


    //let colHideForVet = true;
    let domainWiseShowHide = true;
    let guarId = "Guar ID";
    let guarName = "Guarantor Name";
    let guarOwes = "Guarantor Owes";
    let arp_totBal = "Total Balance";
    let insp_insOwes = "Insurance Owes";
    let dVetFirstname = 'First Name';
    let dBusiness = false;
    let dvet = false;

    const columnConfg = (domainType, columnData) => {
        let updatedArray = [];
        switch (domainType.toLowerCase()) {
            case 'dental':
            case 'optometry':
            case 'orthodontic':
            case 'physician':
            case 'chiropractic':
                //colHideForVet = true;
                let tmpList = {
                    domainWiseShowHide: true,
                    guarId: "Guar ID",
                    guarName: "Guarantor Name",
                    guarOwes: "Guarantor Owes",
                    arp_totBal: "Total Balance",
                    insp_insOwes: "Insurance Owes",
                    dVetFirstname: 'First Name',
                    dBusiness: false,
                    dvet: false
                }

                updatedArray = columnData.map(item => {
                    return {
                        ...item,
                        header: tmpList[item.field] || item.header, // update header if mapping exists
                        domainWiseShowHide: true,                        // force true
                        dBusiness: false,                                // set false
                        dvet: false                                      // set false
                    };
                });

                break;
            case 'veterinary':
                //colHideForVet = false; // hiding the column
                let tmpList2 = {
                    domainWiseShowHide: false,
                    guarId: "Client ID",
                    guarName: "Client Name",
                    guarOwes: "Client Owes",
                    arp_totBal: "Total Balance",
                    insp_insOwes: "Insurance Owes",
                    dBusiness: false,
                    dvet: true,
                    dVetFirstname: 'Pet Name',
                }

                updatedArray = columnData.map(item => {
                    return {
                        ...item,
                        header: tmpList2[item.field] || item.header, // update header if mapping exists
                        domainWiseShowHide: false,                        // force true
                        dBusiness: false,                                // set false
                        dvet: true                                      // set false
                    };
                });


                break;
            case 'business':
                //colHideForVet = false; // hiding the column
                let tmplist3 = {
                    domainWiseShowHide: false,
                    guarId: "Inv./Ref. #",
                    guarName: "Customer Name",
                    guarOwes: "Customer Owes",
                    arp_totBal: "Original Balance",
                    insp_insOwes: "Current Balance",
                    dBusiness: true,
                    dVetFirstname: 'First Name',
                    dvet: false,
                }

                updatedArray = columnData.map(item => {
                    return {
                        ...item,
                        header: tmplist3[item.field] || item.header, // update header if mapping exists
                        domainWiseShowHide: false,                        // force true
                        dBusiness: true,                                // set false
                        dvet: false                                      // set false
                    };
                });


                break;
            default:
                //colHideForVet = false;
                let tmpList4 = {
                    domainWiseShowHide: true,
                    guarId: "Guar ID",
                    guarName: "Guarantor Name",
                    guarOwes: "Guarantor Owes",
                    arp_totBal: "Total Balance",
                    insp_insOwes: "Insurance Owes",
                    dVetFirstname: 'First Name',
                    dBusiness: false,
                    dvet: false
                }

                updatedArray = columnData.map(item => {
                    return {
                        ...item,
                        header: tmpList4[item.field] || item.header, // update header if mapping exists
                        domainWiseShowHide: true,                        // force true
                        dBusiness: false,                                // set false
                        dvet: false                                      // set false
                    };
                });

                break;

        }

        return updatedArray
    }

    //useEffect(() => {
    //    debugger
    //    setIsloading(true)

    //    fetchData();
    //}, []);

    const fetchData = async () => {
        await getDataFN();
    };

    useEffect(() => { 
        debugger
        // if (props.activeTab.toLowerCase() === "report payments") {
        setIsloading(true)
        fetchData();
        //  }
    }, [props.activeTab]);

 

    const getDataFN = async () => {
        try {
            debugger
                //let objquery = "request_key=" + userDetails.profiles[0].request_key + "&practice_id=1, 2, 3&guarantor_id=&bill_type=";
                let objquery = "request_key=" + userDetails.profiles[0].request_key + "&practice_id=1,2,3&guarantor_id=&bill_type=";//there was a space between id so it was not showing proper data so i removed the space
                // await ApiCalls.genericGetAPI('collection_recovery/start_pending?', objquery).then(result => {
                await ApiCalls.getAPICall('v2/collection_recovery/clients?' + objquery).then(result => {
                    if (result.length >= 1) {
                        //let tmpData = [
                        //    { id: 1, selected: false, ServiceType: "0", TSIClient: "C1001", GuarID: "G123", Name: "John Doe", Notes: "Follow-up needed", DateOfResponsibility: "2025-09-15", CustID: 2, PracticeID: "2" },
                        //    { id: 2, selected: false, ServiceType: "1", TSIClient: "C1002", GuarID: "G124", Name: "JanedasfdSdddmith asdf", Notes: "", DateOfResponsibility: "2025-01-25", CustID: 2, PracticeID: "2" },
                        //    { id: 3, selected: false, ServiceType: "1", TSIClient: "C1002", GuarID: "G124", Name: "Jane Smith", Notes: "", DateOfResponsibility: "2025-01-25", CustID: 2, PracticeID: "2" },
                        //    { id: 4, selected: false, ServiceType: "1", TSIClient: "C1002", GuarID: "G124", Name: "Jane Smith", Notes: "", DateOfResponsibility: "2025-01-25", CustID: 2, PracticeID: "2" },
                        //    { id: 5, selected: false, ServiceType: "1", TSIClient: "C1002", GuarID: "G124", Name: "Jane Smith", Notes: "", DateOfResponsibility: "2025-01-25", CustID: 2, PracticeID: "2" },
                        //    { id: 6, selected: false, ServiceType: "1", TSIClient: "C1002", GuarID: "G124", Name: "abc", Notes: "", DateOfResponsibility: "2025-01-25", CustID: 2 }
                        //]

                        let getUpdatecolumns = []
                        let updatedResult = []
                        // show/hide columsn, header name as per domain name
                       // if (props.activeTab.toLowerCase() === "account submited") {
                            updatedResult = result.map(row => ({
                                selected: false,
                                ...row
                            }));
                            let generatedColumns = generateColumnsFromResult(updatedResult[0], configArray)
                            // let generatedColumns = generateColumnsFromResult(tmpData[0], configArray)
                           // console.log(generatedColumns)
                            generatedColumns = [...generatedColumns].sort((a, b) => a.id - b.id);
                           // console.log(generatedColumns)

                            getUpdatecolumns = columnConfg(domainType, generatedColumns);
                        //} else {
                        //    getUpdatecolumns = columnConfg(domainType, columnsReports);
                        //}


                        setColumns(getUpdatecolumns)
                        setData(updatedResult);
                        setIsloading(false)
                    } else {
                        setColumns(configArray)
                        setData([]);
                        setIsloading(false)
                    }
                });
            } 
   
        catch (e) {
        }
    }

    const generateColumnsFromResult = (apiRow, configArray) => {
        debugger
        let tmpkeyArray = Object.keys(apiRow);
        let newColumn = []
        for (let i = 0; i < tmpkeyArray.length; i++) {
            for (let c = 0; c < configArray.length; c++) {
                if (tmpkeyArray[i] === configArray[c].field) {
                    newColumn.push(configArray[c])
                    break;
                }
            }

        }

        return newColumn
        //return Object.keys(apiRow)
        //    .map((key) => configArray.find((col) => col.field === key)) // find config for key
        //    .filter(Boolean); // remove undefined (keys not in configArray)
    };

    //useEffect(() => {
    //    setIsloading(true)
    //    console.log(props.activeTab)
    //    let tmpData = [
    //        { id: 1, selected: false, ServiceType: "0", TSIClient: "C1001", GuarID: "G123", Name: "John Doe", Notes: "Follow-up needed", DateOfResponsibility: "2025-09-15", CustID: 2, PracticeID: "2" },
    //        { id: 2, selected: false, ServiceType: "1", TSIClient: "C1002", GuarID: "G124", Name: "JanedasfdSdddmith asdf", Notes: "", DateOfResponsibility: "2025-01-25", CustID: 2, PracticeID: "2" },
    //        { id: 3, selected: false, ServiceType: "1", TSIClient: "C1002", GuarID: "G124", Name: "Jane Smith", Notes: "", DateOfResponsibility: "2025-01-25", CustID: 2, PracticeID: "2" },
    //        { id: 4, selected: false, ServiceType: "1", TSIClient: "C1002", GuarID: "G124", Name: "Jane Smith", Notes: "", DateOfResponsibility: "2025-01-25", CustID: 2, PracticeID: "2" },
    //        { id: 5, selected: false, ServiceType: "1", TSIClient: "C1002", GuarID: "G124", Name: "Jane Smith", Notes: "", DateOfResponsibility: "2025-01-25", CustID: 2, PracticeID: "2" },
    //        { id: 6, selected: false, ServiceType: "1", TSIClient: "C1002", GuarID: "G124", Name: "abc", Notes: "", DateOfResponsibility: "2025-01-25", CustID: 2 }
    //    ]

    //    let getUpdatecolumns = []
    //    // show/hide columsn, header name as per domain name
    //    if (props.activeTab.toLowerCase() === "submit new accounts for accelerator") {
    //        getUpdatecolumns = columnConfg(domainType, columnsFrist);
    //    } else {
    //        getUpdatecolumns = columnConfg(domainType, columnsReports);
    //    }

    //    setColumns(getUpdatecolumns)
    //  //  setData(tmpData);

    //        setIsloading(false)

    //}, [props.activeTab])




    // Button handlers
    // const handleTab1Click = () => {
    //     // console.log(data)
    //     const selectedRows = data.filter(row => row.selected);
    //     console.log(selectedRows)
    // };
    // const handleTab2Click = () => {
    //     const selectedRows = data.filter(row => row.selected);
    //     console.log(selectedRows)
    // };
    const handleTab3Click = () => {
        const selectedRows = data.filter(row => row.selected);
      //  console.log(selectedRows)
    };

    // Callback to receive updated data from table
    const handleDataChange = (updatedData) => {
        setData(updatedData);
        // You can do more here if needed
    };


    if (isLoading || !Array.isArray(data) || !Array.isArray(columns)) {
        return <div>Loading...</div>;
    }

    return (!isLoading && 
        (        
    <TableControl
            columns={columns}
            initialData={data}
            onDataChange={handleDataChange}
            activeMenu={props.activeMenu}
        />)
    );
};
export default ClientDetails;
