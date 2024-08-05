import CustomInput from "../components/CustomInput";
import { useState, useEffect, useMemo, useCallback } from "react";
import CustomSelect from "../components/CustomSelect";
import "./EmployeeFormTab.css";
import { EMP_SKILL } from "../mock-api/data";

export interface FormProps {
  empID: string;
  firstName: string;
  lastName: string;
  email: string;
  secNum: string;
  yoe: string;
  age: string;
  location: string;
  devlpmnt: string;
  experties: string;
  fnctnlity: string;
}
[];

interface ChildProps {
  setDetails: React.Dispatch<React.SetStateAction<FormProps[]>>;
  editData: FormProps | undefined;
  editAction: boolean;
}
const EmployeeForm = ({ setDetails, editData, editAction }: ChildProps) => {
  const [formData, setFormData] = useState<FormProps>({
    empID: "",
    firstName: "",
    lastName: "",
    email: "",
    secNum: "",
    yoe: "",
    age: "",
    location: "",
    devlpmnt: "",
    experties: "",
    fnctnlity: "",
  });
  const [expertiesData, setExpertiesData] = useState<any>({});

  useEffect(() => {
    if (editData && editAction) {
      setFormData(editData);
    }
  }, [editData, editAction]);

  const handlFormData = useCallback((name: string, value: string) => {
    setFormData((preData) => ({
      ...preData,
      [name]: value,
    }));
  }, []);

  // Effect to update expertiesData when devlpmnt changes
  useEffect(() => {
    const findSkill = EMP_SKILL.find(
      (element) => element.steam === formData.devlpmnt
    );
    setExpertiesData(findSkill);
  }, [formData.devlpmnt]);

  // Calculate developmentList
  const developmentList = useMemo(() => {
    return EMP_SKILL.map((element) => element.steam);
  }, []);

  // Calculate expertiesList based on the selected development
  const expertiesList = useMemo(() => {
    return expertiesData?.skill?.map((element: any) => element.name) || [];
  }, [expertiesData]);

  // Calculate functionalityList based on the selected experties
  const functionalityList = useMemo(() => {
    const findFnctnality = expertiesData?.skill?.find(
      (element: any) => element.name === formData.experties
    );
    return findFnctnality?.functionality || [];
  }, [expertiesData, formData.experties]);

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
      email: "",
      secNum: "",
      yoe: "",
      age: "",
      location: "",
      devlpmnt: "",
      experties: "",
      fnctnlity: "",
    });
  };

  return (
    <div className="employee-form-cont">
      <h4 className="employee-form-cont-header">Employee Registration</h4>
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
        name={"email"}
        label="Email"
        value={formData.email}
        onChange={handlFormData}
        type={"email"}
      />
      <CustomInput
        name={"secNum"}
        label="Secret number"
        value={formData.secNum}
        onChange={handlFormData}
        type={"number"}
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
        label="Year of experience"
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
      <CustomSelect
        name="devlpmnt"
        labelName="Eng Dev"
        placeholder="Select Eng..."
        value={formData.devlpmnt}
        onChange={handlFormData}
        list={developmentList}
      />
      <CustomSelect
        name="experties"
        labelName="Experties In"
        placeholder="Select Str..."
        value={formData.experties}
        onChange={handlFormData}
        list={expertiesList}
      />
      <CustomSelect
        name="fnctnlity"
        labelName="Funationality"
        placeholder="Select Str..."
        value={formData.fnctnlity}
        onChange={handlFormData}
        list={functionalityList}
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

export default EmployeeForm;
