import { createBrowserRouter , createHashRouter} from "react-router-dom";
import Root from "./root";
import ErrorPage from "../error-page.jsx";
import Contact from "./contact.jsx";
// import Counter from "./counter";
import Page from "./page"

const router = createHashRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />
    },
    {
      path: "contacts/:contactId",
      element: <Contact />
    },
    {
      path: "page",
      element: <Page />
    },
    // {
    //   path: "counter",
    //   element: <Counter />
    // },
  ]);

 export default router;