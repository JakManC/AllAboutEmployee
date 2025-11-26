import React from "react";
import NavBar from "./NavBar";
import { useForm } from "react-hook-form";
import useEmployeeStore from "../../employeeStore";

function RegisterEmp() {
  const registerEmployee = useEmployeeStore((state) => state.registerEmployee);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(`Name : ${data.fullName}`);

    registerEmployee(data);
    reset();
  };
  return (
    <div className="mainDiv">
      <div className="navDiv">
        <NavBar />
      </div>
      <div className="regDiv text-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="fullNameDiv">
            <label htmlFor="fullName">
              FullName :
              <input
                type="text"
                className="border-2 border-black p-2 m-2 rounded-full"
                placeholder="Please Enter FullName : "
                {...register("fullName")}
              />
            </label>
          </div>

          <div className="age">
            <label htmlFor="fullName">
              Age :
              <input
                type="number"
                className="border-2 border-black p-2 m-2 rounded-full"
                placeholder="Please Enter Age : "
                {...register("age")}
              />
            </label>
          </div>

          <div className="ambitionDiv">
            <label htmlFor="ambition">
              Ambition :
              <input
                type="text"
                className="border-2 border-black p-2 m-2 rounded-full"
                placeholder="Please Enter Ambition : "
                {...register("ambition")}
              />
            </label>
          </div>

          <div className="subBtn">
            <button
              className="bg-green-700 text-white text-center p-2 m-2 -rounded-f
            "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterEmp;
