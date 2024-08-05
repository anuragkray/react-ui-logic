import React, { useState } from "react";
import RadioBox from "./RadioBox";
import { CustomRadioButon } from "./CustomRadioButon";

interface RadioButtonGroupProps {
  name: string;
  className?: string;
  options: { value: string; label: string }[];
}

const RadioButtonGroup = ({
  name,
  options,
  className,
}: RadioButtonGroupProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioBox className={className ? `radio-button-group ${className}` : ""}>
      {options.map((option) => (
        <CustomRadioButon
          key={option.value}
          id={option.value}
          name={name}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={handleChange}
          labelName={option.label}
        />
      ))}
    </RadioBox>
  );
};

export default RadioButtonGroup;
