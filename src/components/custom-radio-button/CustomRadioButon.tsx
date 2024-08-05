import "./CustomRadioButton.css";
interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  labelName: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const CustomRadioButon = ({
  id,
  name,
  value,
  checked,
  labelName,
  onChange,
}: RadioButtonProps) => {
  return (
    <div className="custom-radio-box">
      <input
        id={id}
        type="radio"
        name={name}
        checked={checked}
        value={value}
        onChange={onChange}
        className="radio-input"
      />
      <label htmlFor={id} className="radio-label">
        {labelName}
      </label>
    </div>
  );
};
