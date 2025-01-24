import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Code from "./pages/Code";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/code",
      element: <Code/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
