import { useState } from "react";
import EmployeeFrom, { FormProps } from "./pages/EmployeeForm";
import "./styles.css";
import EmployeeList from "./pages/EmployeeList";
import EmployeeDetails from "./pages/EmployeeDetails";

function App() {
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
    setEditData(true);
  };


  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
        justifyContent: "space-around",
        columnGap: "20px",
      }}
    >
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
}

export default App;
