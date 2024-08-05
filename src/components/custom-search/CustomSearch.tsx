interface SearchProps {
  value: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CustomSearch = ({ value, onSearch }: SearchProps) => {
  return (
    <search>
      <input
        type="search"
        placeholder="Enter name..."
        value={value}
        onChange={onSearch}
      />
    </search>
  );
};
export default CustomSearch;
