import { createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Dev_Nahid/Client/Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
