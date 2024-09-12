import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";
import "./app/styles/global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
