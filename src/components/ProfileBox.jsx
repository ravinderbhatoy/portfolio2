import React, { useEffect, useState } from "react";

function ProfileBox() {

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 60); // 1 minute
    return () => {
      clearInterval(interval); 
    };
  }, []);

  return (
    <article className="bg-[url('/images/pattern.webp')] relative p-7 w-full h-fit">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-ex-light-violet bg-opacity-50 z-0"></div>

      {/* Content above the background */}
      <div className="relative space-y-2 z-10 text-center text-ex-hard-violet">
        <img
          className="border-4 rounded-full border-hard-violet w-32 mx-auto"
          src="/images/profile.jpeg"
          alt="Profile"
        />
        <h2 className="font-heading text-4xl ">
          Ravinder
        </h2>
        <div className="w-full max-w-40 bg-ex-light-violet h-1 mx-auto">
          <div className="w-full max-w-28 bg-hard-violet h-1"></div>
        </div>
        <div className="space-y-2 w-full max-w-40 text-start mx-auto">
        <h3 className=" text-2xl font-normal">
          @binuuyy
        </h3>
        <div className="flex">
          <img src="/logo/location.svg" alt="" />
          <p className="text-xl">Punjab, India</p>
        </div>
        <div className="flex">
          <img src="/logo/clock.svg" alt="" />
          <p className="text-xl">{currentTime}</p>
        </div>
        </div>
      </div>
    </article>
  );
}

export default ProfileBox;
