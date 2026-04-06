import "./App.css";
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Code from "./pages/Code";
import Social from "./pages/Social";
import ResumeEmbed from "./pages/ResumeEmbed";
import 'animate.css'

function App() {
  const [isBooting, setIsBooting] = useState(true);

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

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsBooting(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      {isBooting ? (
        <div className="site-loader">
          <div className="site-loader__panel">
            <div className="site-loader__bar">
              <div className="site-loader__bar-fill"></div>
            </div>
            <div className="site-loader__text">
              <div>[ boot ] loading portfolio shell...</div>
              <div>[ load ] syncing routes and content...</div>
              <div>[ ready ] opening personal interface...</div>
            </div>
          </div>
        </div>
      ) : null}
      {!isBooting ? <RouterProvider router={router}/> : null}
    </>
  );
}

export default App;
