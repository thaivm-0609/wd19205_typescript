import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Create from "./pages/Create";

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
  {
    path: "/admin", 
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
