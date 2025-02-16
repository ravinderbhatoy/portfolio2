import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Code from "./pages/Code";
import Social from "./pages/Social";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/code",
      element: <Code/>
    },
    {
      path: "/social",
      element: <Social/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
