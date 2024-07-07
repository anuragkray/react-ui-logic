import { useMemo, useState } from "react";
import CustomSearch from "../components/CustomSearch";
import { FormProps } from "./EmployeeForm";

interface ChildProps {
  empDetails: FormProps[];
  handleViewButton: (ID: string) => void;
}

const EmployeeList = ({ empDetails, handleViewButton }: ChildProps) => {
  const [searchData, setSearchData] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const haveData = empDetails?.length;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
  };

  const sortedList = useMemo(() => {
    let filteredList = empDetails;
    if (searchData) {
      filteredList = empDetails.filter((item) =>
        item.firstName.toLowerCase().includes(searchData.toLowerCase())
      );
    }

    // Sort the filtered list based on sortOrder
    return filteredList.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.firstName.localeCompare(b.firstName);
      } else {
        return b.firstName.localeCompare(a.firstName);
      }
    });
  }, [empDetails, searchData, sortOrder]);

  const handleSortList = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div
      style={{
        display: "block",
        border: "1px solid",
        height: "100%",
        width: "100%",
      }}
    >
      <h6 style={{ padding: "8px" }}>Registered Employee</h6>
      <CustomSearch value={searchData} onSearch={handleSearch} />
      <button onClick={handleSortList}>
        Sort by name {sortOrder === "asc" ? "↑" : "↓"}
      </button>
      {haveData ? (
        sortedList.map((data) => (
          <div key={data.empID}>
            <div
              style={{ paddingTop: "8px" }}
            >{`${data.firstName} ${data.lastName}`}</div>
            <div>
              <button onClick={() => handleViewButton(data.empID)}>View</button>
            </div>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default EmployeeList;
