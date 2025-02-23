import React from "react";

function ResumeEmbed() {
  return (
    <iframe
      src="https://simon.lecoq.io/?tab=resume"
      width="100%" // Or a specific pixel width
      height="800px" // Adjust height as needed
      style={{ border: "none" }}
      title="Embedded Resume" // Add a title for accessibility
    ></iframe>
  );
}

export default ResumeEmbed;
