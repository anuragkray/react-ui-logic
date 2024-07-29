import { useState } from "react";
import EmployeeFrom, { FormProps } from "./pages/EmployeeForm";
import EmployeeList from "./pages/EmployeeList";
import EmployeeDetails from "./pages/EmployeeDetails";

const parentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  width: "60%" /* Container width (100% - 10% - 10%) */,
  maxWidth:
    "60vw" /* Ensure the container does not exceed 80% of the viewport width */,
  margin: "16px auto 16px" /* Center horizontally */,
  border: "2px solid gray",
};
const headerShadow = {
  color: "white",
  textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue",
  marginTop: "24px",
};

const AppContainer = () => {
  const [details, setDetails] = useState<FormProps[]>([]);
  const [viewData, setViewData] = useState<FormProps | undefined>();
  const [editData, setEditData] = useState<boolean>(false);

  const handleViewButton = (ID: string) => {
    const viewData = details.find((filterData) => filterData.empID === ID);
    setViewData(viewData);
  };

  const handleDelete = (ID: string) => {
    const data = details.filter((element) => element.empID !== ID);
    setDetails(data);
    setViewData(undefined);
  };

  const handleEditButton = () => {
    console.log("---");
    setEditData((prev) => !prev);
  };
  return (
    <div
      style={{
        ...parentStyle,
        flexDirection: "column",
        boxShadow: "8px 8px 8px 8px lightblue",
      }}
    >
      <h3 style={headerShadow}>User Interface Functionality In React</h3>
      <div>
        <EmployeeList
          empDetails={details}
          handleViewButton={handleViewButton}
        />
      </div>
      <div>
        <EmployeeFrom
          setDetails={setDetails}
          editData={viewData}
          editAction={editData}
        />
      </div>
      <div>
        <EmployeeDetails
          viewData={viewData}
          handleDelete={handleDelete}
          handleEditButton={handleEditButton}
        />
      </div>
    </div>
  );
};
export default AppContainer;
/*
----One Way for CENTER_A_DIV -------------
className{
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
-----SECOND WAY-----------
{
    display: block;
    margin: 0 auto;
}
----THIRD WAY GRID--------
{
 display: grid;
  place-items: center; 
  min-height: 100vh;  
  width: 100vw;
}
*/
