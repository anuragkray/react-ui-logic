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
    <div
      style={{
        display: "flex",
        margin: "12px",
        flexBasis: "50%",
        flexDirection: "column",
      }}
    >
      <div>
        <label htmlFor={name}>{label}</label>
      </div>
      <div>
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
