import axios from "axios";
import { create } from "zustand";
const BASE_URL = import.meta.env.VITE_API_URL;

const useEmployeeStore = create((set) => ({
  employeeArray: [],

  registerEmployee: async (empl) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/public/registerEmployee2511`,
        empl
      );
      set((state) => ({
        employeeArray: [...state.employeeArray, res.data],
      }));
    } catch (error) {
      console.log("Error Occured: ", error);
    }
  },

  listOfEmployeesFromStore: async () => {
    try {
      const res = await axios.get(`${BASE_URL}/admin/getAllEmployees2511`);
      console.log(res.data);
      set((state) => ({
        employeeArray: res.data,
      }));
    } catch (error) {
      console.log("Error Occured In Fetching List : ", error);
    }
  },
}));
export default useEmployeeStore;
