import React from "react";
import Navbar from "../components/Navbar";

function ResumeEmbed() {
  return (
    <div className="container mx-auto py-12 md:px-12">
      <Navbar />
      <div className="bg-hard-violet w-full h-5 opacity-70 mt-12"></div>
        <iframe
          src="https://ravinderbhatoy.github.io/resume/"
          width="100%" // Or a specific pixel width
          style={{ border: "none" }}
          title="Embedded Resume" // Add a title for accessibility
        ></iframe>

   </div>
  );
}

export default ResumeEmbed;
