import { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Postcard from "./components/Postcard";
import ProfileBox from "./components/ProfileBox";

function App() {
  return (
    <>
      <div className="container mx-auto px-12 py-12 space-y-12">
        <Navbar />
        <div className="grid gap-8 lg:grid-cols-4">
          <ProfileBox />
          <div className="lg:col-span-3 ">
            <Postcard
              heading={"Hi, I am Ravinder a coder."}
              subHeading="Living Great, Building Awesome Digital Experiences."
              description="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse laudantium nulla culpa eligendi, iste dicta magni ut vel optio in. Sed consequuntur explicabo natus dicta voluptas quisquam numquam provident.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse laudantium nulla culpa eligendi, iste dicta magni ut vel optio in. Sed consequuntur explicabo natus dicta voluptas quisquam numquam provident.
            "
              icon="/logo/intro-emote.svg"
            />
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="hidden lg:block"></div>
          <div className="lg:col-span-3">
            <Postcard
              heading={"My Hobbies"}
              description="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse laudantium nulla culpa eligendi, iste dicta magni ut vel optio in. Sed consequuntur explicabo natus dicta voluptas quisquam numquam provident.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse laudantium nulla culpa eligendi, iste dicta magni ut vel optio in. Sed consequuntur explicabo natus dicta voluptas quisquam numquam provident.
            "
              icon="/logo/football.svg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
