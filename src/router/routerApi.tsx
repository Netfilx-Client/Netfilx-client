import { createBrowserRouter } from "react-router-dom";
import GlobalContainer from "../components/block/GlobalContainer";

const router = createBrowserRouter([
  {
    path: "*",
    element: <GlobalContainer />,
    children: [{}],
  },
]);

export default router;
