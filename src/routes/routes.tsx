
import Landing from "../pages/Landing";
import Search from "../pages/Search";
import Details from "../pages/Details";
import Development from "../components/modules/Categories/Development";
import Login from "../components/common/Login";
import Forgetpassword from "../components/common/Forgetpassword";
import Signup from "./../components/common/Signup";
import Error from "../pages/Error";

export const PRIMARY_ROUTES = [
  { path: "/", element: <Landing /> },
  { path: "/development", element: <Development /> },
  { path: "/search/:keyword", element: <Search /> },
  { path: "/movie/:id", element: <Details /> },
  { path: "/sign-up", element: <Signup /> },
  { path: "/log-in", element: <Login /> },
  { path: "/forget-password", element: <Forgetpassword /> },
  { path: "*", element: <Error /> },
];
