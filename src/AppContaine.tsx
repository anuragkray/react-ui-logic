import { useState, useTransition } from "react";
import EmployeeForm, { FormProps } from "./tabs/EmployeeFormTab";
import EmployeeList from "./tabs/EmployeeListTab";
import EmployeeDetails from "./tabs/EmpDetailTab";
import TabButton from "./components/TabButton";

const parentStyle = {
  // display: "flex",
  justifyContent: "center",
  // alignItems: "center",
  minHeight: "100vh",
  width: "60%" /* Container width (100% - 10% - 10%) */,
  maxWidth:
    "60vw" /* Ensure the container does not exceed 80% of the viewport width */,
  margin: "16px auto 16px" /* Center horizontally */,
  border: "2px solid gray",
};
const headerSectionStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
  //State for Tab
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState<String>("empForm");

  function handleTab(nextTab: string) {
    startTransition(() => setTab(nextTab));
  }
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
        boxShadow: "8px 2px 8px #818a8d",
      }}
    >
      {/* Header Section */}
      <header style={headerSectionStyle}>
        <h3 style={headerShadow}>User Interface Functionality In React</h3>
      </header>
      {/* Tab Section */}
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "3rem",
          left: "10%",
        }}
      >
        <TabButton
          isActive={tab === "empForm"}
          onClick={() => handleTab("empForm")}
          style={{ margin: "8px" }}
        >
          Form
        </TabButton>
        <TabButton
          isActive={tab === "empList"}
          onClick={() => handleTab("empList")}
          style={{ margin: "8px" }}
        >
          Emp List
        </TabButton>
        <TabButton
          isActive={tab === "empDtl"}
          onClick={() => handleTab("empDtl")}
          style={{ margin: "8px" }}
        >
          Emp Details
        </TabButton>
      </section>
      {/* Details */}
      <article>
        {tab === "empForm" && (
          <EmployeeForm
            setDetails={setDetails}
            editData={viewData}
            editAction={editData}
          />
        )}
        {tab === "empList" && (
          <EmployeeList
            empDetails={details}
            handleViewButton={handleViewButton}
          />
        )}
        {tab === "empDtl" && (
          <EmployeeDetails
            viewData={viewData}
            handleDelete={handleDelete}
            handleEditButton={handleEditButton}
          />
        )}
      </article>
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
