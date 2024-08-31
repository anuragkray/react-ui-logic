import CustomInput from "../components/custom-input/CustomInput";
import { useState, useEffect, useMemo, useCallback } from "react";
import CustomSelect from "../components/custom-select/CustomSelect";
import "./EmployeeFormTab.css";
import { EMP_SKILL } from "../mock-api/data";
import RadioButtonGroup from "../components/custom-radio-button/RadioButtonGroup";
import { GENDER } from "../utils/constant/const";
import CustomCheckBox from "../components/custom-check-box/CustomCheckBox";

export interface FormProps {
  empID: string;
  firstName: string;
  lastName: string;
  email: string;
  phNum: string;
  gndr: string;
  exprtLevl: boolean;
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
    phNum: "",
    gndr: "",
    exprtLevl: false,
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

  const handlFormData = useCallback((name: string, value: string | boolean) => {
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
      phNum: "",
      yoe: "",
      gndr: "",
      exprtLevl: false,
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
        name={"phNum"}
        label="Phone no"
        value={formData.phNum}
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
      <RadioButtonGroup
        className="gender-radio"
        name="gndr"
        value={formData.gndr}
        onChange={handlFormData}
        options={GENDER}
      />
      <CustomCheckBox
        id="exprtLevl"
        name="exprtLevl"
        checked={formData.exprtLevl || false}
        onChange={handlFormData}
        labelName="Expert"
        className={"form-check-box"}
      />
      <CustomCheckBox
        id="exprtLevl"
        name="exprtLevl"
        checked={formData.exprtLevl || false}
        onChange={handlFormData}
        labelName="Expert"
        className={"form-check-box"}
      />
      <CustomInput
        name={"yoe"}
        label="Year of exp"
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
        style={{
          backgroundColor: "blue",
          padding: "8px",
          marginBottom: "8px",
          marginTop: "12px",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default EmployeeForm;
