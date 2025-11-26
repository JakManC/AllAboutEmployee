import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterEmp from "./components/RegisterEmp.jsx";
import ListOfEmployees from "./components/ListOfEmployees.jsx";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/registerEmployee", element: <RegisterEmp /> },
  { path: "/listOfEmployees", element: <ListOfEmployees /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
);
