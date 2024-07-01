import { FormProps } from "./EmployeeForm";

interface ChildProps {
  empDetails: FormProps[];
  handleViewButton: (ID: string) => void;
}
const EmployeeList = ({ empDetails, handleViewButton }: ChildProps) => {
  const haveData = empDetails?.length;

  return (
    <div
      style={{
        display: "block",
        border: "1px solid",
        height: "100%",
        width: "100%",
      }}
    >
      <h6 style={{ padding: "8px" }}>Registered Employee</h6>
      {haveData ? (
        empDetails?.map((data) => (
          <>
            <div
              style={{ paddingTop: "8px" }}
            >{`${data.firstName} ${data.lastName}`}</div>
            <div>
              <button onClick={() => handleViewButton(data.empID)}>View</button>
            </div>
          </>
        ))
      ) : (
        <>
          <p>No data availabel</p>
        </>
      )}
    </div>
  );
};
export default EmployeeList;
