import "./CustomInput.css";
interface CustomInputProps {
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (name: string, value: string) => void;
  disabled?: boolean;
}
const CustomInput = ({
  name,
  value,
  onChange,
  type,
  label,
  disabled = false,
}: CustomInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange(name, value);
  };
  return (
    <div className="input-container">
      <div className="input-container-item1">
        <label htmlFor={name}>{label}</label>
      </div>
      <div className="input-container-item2">
        <input
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};
export default CustomInput;
