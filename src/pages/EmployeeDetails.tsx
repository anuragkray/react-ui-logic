import { FormProps } from "./EmployeeForm";

interface EmployeeDetailsProps {
  viewData?: FormProps;
  handleDelete: (ID: string) => void;
  handleEditButton: () => void;
}
const EmployeeDetails = ({
  viewData,
  handleDelete,
  handleEditButton,
}: EmployeeDetailsProps) => {
  console.log("Props", viewData);
  return (
    <div
      style={{
        display: "block",
        border: "1px solid",
        height: "50%",
      }}
    >
      <h6 style={{ padding: "8px" }}>Employee Details</h6>
      <div>
        <span>ID: {viewData?.empID}</span>
        <br></br>
        <span>First Name: {viewData?.firstName}</span>
        <br></br>
        <span>Last Name: {viewData?.lastName}</span>
        <br></br>
        <span>YOE: {viewData?.yoe}</span>
        <br></br>
        <span>Location: {viewData?.location}</span>
        <br></br>
        <button
          style={{ margin: "8px" }}
          onClick={() => handleDelete(viewData?.empID as string)}
        >
          Delete
        </button>
        <button onClick={handleEditButton}>Edit</button>
      </div>
    </div>
  );
};
export default EmployeeDetails;
