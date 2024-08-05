import "./CustomSelect.css";

interface SelectProps {
  labelName: string;
  name: string;
  value?: string;
  onChange: (name: string, value: string) => void;
  placeholder: string;
  list?: string[];
}
const CustomSelect = ({
  labelName,
  name,
  value,
  list: data,
  onChange,
  placeholder,
}: SelectProps) => {
  
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    onChange(name, value);
  };
  return (
    <div className="select-container">
      <div className="select-container-item1">
        <label>{labelName}</label>
      </div>
      <div className="select-container-item2">
        <select
          style={{ width: "100%" }}
          name={name}
          onChange={handleChange}
          value={value}
        >
          <option key={"placeholder"}>{placeholder}</option>
          {data &&
            data?.map((element: any) => (
              <option key={element} value={element}>
                {element}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;
