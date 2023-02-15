import { createBrowserRouter , createHashRouter} from "react-router-dom";
import Root from "./root";
import ErrorPage from "../error-page.jsx";
import Contact from "./contact.jsx";

const router = createHashRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: "contacts/:contactId",
      element: <Contact />,
    },
  ]);

 export default router;