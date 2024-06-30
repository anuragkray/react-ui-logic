interface CustomInputProps {
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (name: string, value: string) => void;
}
const CustomInput = ({
  name,
  value,
  onChange,
  type,
  label,
}: CustomInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange(name, value);
  };
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} value={value} onChange={handleChange} />
    </>
  );
};
export default CustomInput;
