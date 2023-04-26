import { createBrowserRouter } from "react-router-dom";
import GlobalContainer from "../components/block/GlobalContainer";
import Main from "../pages/main/main";
import Login from "../pages/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalContainer />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
