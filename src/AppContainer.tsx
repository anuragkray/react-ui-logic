import { useState, useTransition } from "react";
import EmployeeForm, { FormProps } from "./tabs/EmployeeFormTab";
import EmployeeList from "./tabs/EmployeeListTab";
import EmployeeDetails from "./tabs/EmpDetailTab";
import TabButton from "./components/custom-tab/TabButton";
import "./AppContainer.css";

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
    setEditData((prev) => !prev);
  };
  return (
    <main className="app-container">
      {/* Header Section */}
      <header className="app-container-item-header">
        <h3>User Interface Functionality In React</h3>
      </header>
      {/* Tab Section */}
      <section className="app-container-item-tab">
        <TabButton
          isActive={tab === "empForm"}
          onClick={() => handleTab("empForm")}
        >
          Form
        </TabButton>
        <TabButton
          isActive={tab === "empList"}
          onClick={() => handleTab("empList")}
        >
          Emp List
        </TabButton>
        <TabButton
          isActive={tab === "empDtl"}
          onClick={() => handleTab("empDtl")}
        >
          Emp Details
        </TabButton>
      </section>
      {/* Details of tab section*/}
      <section className="app-container-item-details">
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
      </section>
    </main>
  );
};
export default AppContainer;
