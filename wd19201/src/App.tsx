import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

//khai bao router
const routeConfig = [
  { 
    path: "", //url
    element: <Homepage /> //pages
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
