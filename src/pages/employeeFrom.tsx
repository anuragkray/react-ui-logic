import CustomInput from "../components/CustomInput";
import { useState } from "react";

export interface FormProps {
  firstName: string;
  lastName: string;
  yoe: string;
  age: string;
  location: string;
}
[];

interface ChildProps {
  setDetails: React.Dispatch<React.SetStateAction<FormProps[]>>;
}
const EmployeeFrom = ({ setDetails }: ChildProps) => {
  const [formData, setFormData] = useState<FormProps>({
    firstName: "",
    lastName: "",
    yoe: "",
    age: "",
    location: "",
  });

  const handlFormData = (name: string, value: string) => {
    setFormData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setDetails((prevData: FormProps[]) => [...prevData, formData]);
    setFormData({
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
      }}
    >
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
        name={"yoe"}
        label="YOE"
        value={formData.yoe}
        onChange={handlFormData}
        type={"text"}
      />
      <CustomInput
        name={"age"}
        label="Age"
        value={formData.age}
        onChange={handlFormData}
        type={"text"}
      />
      <CustomInput
        name={"location"}
        label="Location"
        value={formData.location}
        onChange={handlFormData}
        type={"text"}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default EmployeeFrom;
