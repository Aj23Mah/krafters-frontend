
// import Landing from "../pages/Landing";
import Landing from "../pages/Landing";
import Search from "../pages/Search";
import Details from "../pages/Details";
import Development from "../components/modules/Categories/Development";
import Login from "../components/common/Login";
import Forgetpassword from "../components/common/Forgetpassword";
import Signup from './../components/common/Signup';

export const PRIMARY_ROUTES = [
  { path: "/", element: <Landing /> },
  { path: "/development", element: <Development /> },
  { path: "/search/:keyword", element: <Search /> },
  { path: "/movie/:id", element: <Details /> },
  { path: "/login", element: <Login /> },
  { path: "/forgetpassword", element: <Forgetpassword /> },
  { path: "/signup", element: <Signup /> },
];
