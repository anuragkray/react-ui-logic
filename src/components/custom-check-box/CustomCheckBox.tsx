import React from "react";
import "./CustomCheckBox.css";
interface CustomCheckProps {
  id: string;
  checked: boolean;
  name: string;
  onChange: (name: string, checked: boolean) => void;
  labelName: string;
  className: string;
}
const CustomCheckBox = ({
  id,
  labelName,
  name,
  checked,
  onChange,
  className,
}: CustomCheckProps) => {
  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    onChange(name, checked);
  };
  return (
    <div className={`custom-check-box-container ${className ?? ""}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={handleSelect}
      />
      <label htmlFor={id}>{labelName}</label>
    </div>
  );
};

export default CustomCheckBox;
