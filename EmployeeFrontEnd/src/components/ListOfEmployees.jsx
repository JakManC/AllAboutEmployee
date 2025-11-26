import React, { useEffect } from "react";
import useEmployeeStore from "../../employeeStore";
import NavBar from "./NavBar";

function ListOfEmployees() {
  const listOfEmployeesFromStore = useEmployeeStore(
    (state) => state.listOfEmployeesFromStore
  );
  const employeeArray = useEmployeeStore((state) => state.employeeArray);

  useEffect(() => {
    listOfEmployeesFromStore();
  }, []);
  return (
    <div className="mainDiv">
      <div className="navDiv">
        <NavBar />
      </div>
      <div>
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border-b">Name</th>
              <th className="px-4 py-2 text-left border-b">Age</th>
              <th className="px-4 py-2 text-left border-b">Ambition</th>
            </tr>
          </thead>

          <tbody>
            {employeeArray.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{employee.fullName}</td>
                <td className="px-4 py-2 border-b">{employee.age}</td>
                <td className="px-4 py-2 border-b">{employee.ambition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListOfEmployees;
