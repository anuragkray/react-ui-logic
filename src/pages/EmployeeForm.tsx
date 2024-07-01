import CustomInput from "../components/CustomInput";
import { useState, useEffect } from "react";

export interface FormProps {
  empID: string;
  firstName: string;
  lastName: string;
  yoe: string;
  age: string;
  location: string;
}
[];

interface ChildProps {
  setDetails: React.Dispatch<React.SetStateAction<FormProps[]>>;
  editData: FormProps | undefined;
  editAction: boolean;
}
const EmployeeFrom = ({ setDetails, editData, editAction }: ChildProps) => {
  const [formData, setFormData] = useState<FormProps>({
    empID: "",
    firstName: "",
    lastName: "",
    yoe: "",
    age: "",
    location: "",
  });

  useEffect(() => {
    if (editData && editAction) {
      setFormData(editData);
    }
  }, [editData, editAction]);

  const handlFormData = (name: string, value: string) => {
    setFormData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (editAction) {
      setDetails((prevData: FormProps[]) =>
        prevData.map((data) =>
          data.empID === formData.empID ? formData : data
        )
      );
    } else {
      formData.empID &&
        setDetails((prevData: FormProps[]) => [...prevData, formData]);
    }
    setFormData({
      empID: "",
      firstName: "",
      lastName: "",
      yoe: "",
      age: "",
      location: "",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        border: "1px solid",
      }}
    >
      <h4 style={{ padding: "8px" }}>Employee Registration</h4>
      <CustomInput
        name={"firstName"}
        label="First Name"
        value={formData.firstName}
        onChange={handlFormData}
        type={"text"}
      />
      <CustomInput
        name={"lastName"}
        label="Last Name"
        value={formData.lastName}
        onChange={handlFormData}
        type={"text"}
      />
      <CustomInput
        name={"empID"}
        label="Employee ID"
        value={formData.empID}
        onChange={handlFormData}
        type={"text"}
        disabled={editAction as boolean}
      />
      <CustomInput
        name={"yoe"}
        label="YOE"
        value={formData.yoe}
        onChange={handlFormData}
        type={"number"}
      />
      <CustomInput
        name={"age"}
        label="Age"
        value={formData.age}
        onChange={handlFormData}
        type={"number"}
      />
      <CustomInput
        name={"location"}
        label="Location"
        value={formData.location}
        onChange={handlFormData}
        type={"text"}
      />
      <button
        onClick={handleSubmit}
        style={{ backgroundColor: "blue", padding: "8px", marginBottom: "8px" }}
      >
        Submit
      </button>
    </div>
  );
};

export default EmployeeFrom;
