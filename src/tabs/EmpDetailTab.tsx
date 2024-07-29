import { FormProps } from "./EmployeeFormTab";
import { useMemo, useState } from "react";
interface EmployeeDetailsProps {
  viewData?: FormProps;
  handleDelete: (ID: string) => void;
  handleEditButton: () => void;
}

const nameWithSkill = [
  {
    value: "fntnd",
    steam: "FNTND",
    skill: ["React Js", "Javascript", "Vue JS"],
  },
  { value: "bknd", steam: "BKND", skill: ["Java", "Python", "Golang"] },
  { value: "dtbs", steam: "DTBS", skill: ["Sql", "Mono DB", "Maria DB"] },
];
const EmployeeDetails = ({
  viewData,
  handleDelete,
  handleEditButton,
}: EmployeeDetailsProps) => {
  const [stream, setStream] = useState("");

  const skillList = useMemo(() => {
    const skillData = nameWithSkill.find((element) => element.value === stream);

    return skillData?.skill ? skillData?.skill : [];
  }, [stream]);

  const handleStream = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target;
    setStream(value);
  };
  return (
    <div
      style={{
        display: "block",
        border: "1px solid",
        height: "50%",
      }}
    >
      <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
        <tr>
          <th
            colSpan={5}
            style={{ border: "1px solid black", borderCollapse: "collapse" }}
          >
            Employee Details
          </th>
        </tr>
        <tr>
          <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            Emp ID
          </th>
          <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            First Name
          </th>
          <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            Last Name
          </th>
          <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            YOE
          </th>
          <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            Location
          </th>
        </tr>
        <tbody>
          <tr>
            <td
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                textAlign: "center",
              }}
            >
              {viewData?.empID}
            </td>
            <td
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                textAlign: "center",
              }}
            >
              {viewData?.firstName}
            </td>
            <td
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                textAlign: "center",
              }}
            >
              {viewData?.lastName}
            </td>
            <td
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                textAlign: "center",
              }}
            >
              {viewData?.yoe}
            </td>
            <td
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                textAlign: "center",
              }}
            >
              {viewData?.location}
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          style={{ marginLeft: "40%", marginRight: "8px", marginTop: "2%" }}
          onClick={() => handleDelete(viewData?.empID as string)}
        >
          Delete
        </button>
        <button onClick={handleEditButton}>Edit</button>
      </div>
      <div style={{ marginTop: "24Px" }}>
        <label>Stream</label>
        <select onChange={handleStream}>
          <option>Select Stream..</option>
          {nameWithSkill.map((element) => (
            <option key={element.value} value={element.value}>
              {element.steam}
            </option>
          ))}
        </select>
        <label>Skills</label>
        <select>
          <option>Select Skills..</option>
          {skillList.map((element) => (
            <option key={element} value={element}>
              {element}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default EmployeeDetails;
