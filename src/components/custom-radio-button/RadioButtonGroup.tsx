import RadioBox from "./RadioBox";
import { CustomRadioButon } from "./CustomRadioButon";

interface RadioButtonGroupProps {
  name: string;
  value: string;
  className?: string;
  options: { value: string; label: string }[];
  onChange: (name: string, value: string) => void;
}

const RadioButtonGroup = ({
  name,
  options,
  value,
  className,
  onChange,
}: RadioButtonGroupProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log("NAME", name, value);
    onChange(name, value);
  };

  return (
    <RadioBox className={className ? `radio-button-group ${className}` : ""}>
      {options.map((option) => (
        <CustomRadioButon
          key={option.value}
          id={option.value}
          name={name}
          value={option.value}
          checked={option.value === value}
          onChange={handleChange}
          labelName={option.label}
        />
      ))}
    </RadioBox>
  );
};

export default RadioButtonGroup;
