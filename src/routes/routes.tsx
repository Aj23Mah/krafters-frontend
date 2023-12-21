
// import Landing from "../pages/Landing";
import Landing from "../pages/Landing";
import Search from "../pages/Search";
import Details from "../pages/Details";
import Development from "../components/modules/Categories/Development";

export const PRIMARY_ROUTES = [
  { path: "/", element: <Landing /> },
  { path: "/development", element: <Development /> },
  { path: "/search/:keyword", element: <Search /> },
  { path: "/movie/:id", element: <Details /> },
]