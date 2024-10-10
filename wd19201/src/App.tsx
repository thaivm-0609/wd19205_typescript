import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Create from "./pages/Create";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

//khai bao router
const routeConfig = [
  { 
    path: "/", //url
    element: <Homepage /> //pages
  },
  { //router chi tiết
    path: "/products/:id", //url
    element: <Detail /> 
  },
  { //router thêm mới
    path: "/create",
    element: <Create />
  },
  { //router đăng ký
    path: "/register",
    element: <Register />
  },
  { //router đăng nhập
    path: "/login",
    element: <Login />
  },
  {
    path: "/admin", 
    element: <Admin />,
    children: [  //khai báo router con
      { path: "" },
      { path: "products" },
      { path: "users" }
    ]
  },
  { 
    path: "*", 
    element: <NotFound />
  }
];

function App() {
  const routes = useRoutes(routeConfig);

  return <div>{routes}</div>
}

export default App
