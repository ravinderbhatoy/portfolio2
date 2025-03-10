import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Code from "./pages/Code";
import Social from "./pages/Social";
import ResumeEmbed from "./pages/ResumeEmbed";
import 'animate.css'

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
    },
    {
      path: "/resume",
      element: <ResumeEmbed/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
