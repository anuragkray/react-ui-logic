import { useState } from "react";
import EmployeeFrom, { FormProps } from "./pages/employeeFrom";
import "./styles.css";

function App() {
  const [details, setDetails] = useState<FormProps[]>([]);

  console.log("details", details);
  return (
    <>
      <EmployeeFrom setDetails={setDetails} />
    </>
  );
}

export default App;
