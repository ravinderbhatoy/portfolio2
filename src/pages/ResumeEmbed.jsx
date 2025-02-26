import React from "react";
import Navbar from "../components/Navbar";
import { useRef, useEffect } from "react";

function ResumeEmbed() {

  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = () => {
        iframe.contentWindow.postMessage({ action: 'changeBg', color: "#A6A6BF" }, '*');
      };
    }
  }, []);

  return (
    <div className="container mx-auto py-12 md:px-12 h-screen">
      <Navbar />
      <div className="bg-light-violet w-full h-5 opacity-70 mt-12 mb-7"></div>
      <div className="overflow-scroll no-scrollbar h-[calc(100vh-12rem)]">
        <div className="bg-hard-violet text-lightest-violet text-xl flex items-center justify-between p-1 px-4">
          <div className="flex gap-2 items-center ">
          <svg className="fill-current" width="15" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.286 3.85c0-.146.056-.286.157-.389A.529.529 0 0 1 4.82 3.3h5.358c.142 0 .278.058.378.161a.557.557 0 0 1 0 .778.529.529 0 0 1-.378.161H4.82a.529.529 0 0 1-.378-.161.558.558 0 0 1-.157-.389ZM2.679 6.6a.529.529 0 0 0-.38.161.558.558 0 0 0 0 .778c.101.103.238.161.38.161h9.643a.529.529 0 0 0 .378-.161.558.558 0 0 0 0-.778.529.529 0 0 0-.378-.161H2.678Zm-.536 2.75c0-.146.056-.286.157-.389a.529.529 0 0 1 .379-.161h9.643c.142 0 .278.058.378.161a.558.558 0 0 1 0 .778.529.529 0 0 1-.378.161H2.678a.529.529 0 0 1-.38-.161.558.558 0 0 1-.156-.389ZM2.679 11a.529.529 0 0 0-.38.161.557.557 0 0 0 0 .778c.101.103.238.161.38.161h9.643a.53.53 0 0 0 .378-.161.558.558 0 0 0 0-.778.529.529 0 0 0-.378-.161H2.678Z" />
            <path fill-rule="evenodd" clipRule="evenodd" d="M15 17.6a2.23 2.23 0 0 1-.628 1.556 2.115 2.115 0 0 1-1.515.644H11.25V22l-1.607-.825L8.036 22v-2.2H2.143a2.115 2.115 0 0 1-1.515-.644A2.23 2.23 0 0 1 0 17.6V2.2C0 1.617.226 1.057.628.644A2.115 2.115 0 0 1 2.143 0h10.714c.569 0 1.114.232 1.515.644.402.413.628.973.628 1.556v15.4ZM2.143 1.1c-.284 0-.557.116-.758.322-.2.206-.314.486-.314.778v15.4c0 .292.113.572.314.778.201.206.474.322.758.322h5.893v-1.295a2.253 2.253 0 0 1-.346-2.36c.17-.386.444-.713.79-.943a2.103 2.103 0 0 1 2.325 0c.347.23.621.557.79.943a2.253 2.253 0 0 1-.345 2.36V18.7h1.607c.284 0 .557-.116.758-.322.2-.206.314-.486.314-.778V2.2c0-.292-.113-.572-.314-.778a1.058 1.058 0 0 0-.758-.322H2.143Zm8.036 16.98a2.09 2.09 0 0 1-1.072 0v2.14l.536-.275.536.275v-2.14Zm-.536-1.03c.284 0 .556-.116.757-.322.201-.207.314-.486.314-.778 0-.292-.113-.571-.314-.778a1.058 1.058 0 0 0-.757-.322c-.284 0-.557.116-.758.322-.2.207-.314.486-.314.778 0 .292.113.572.314.778.201.206.474.322.758.322Z" />
          </svg> 
          <p>Resume</p>
          </div>
          <a target="_blank" href="https://ravinderbhatoy.github.io/resume/">Open in new tab</a>
        </div>  
        <iframe
          ref={iframeRef}
          id="myIframe"
          src="https://ravinderbhatoy.github.io/resume/"
          width="100%" // Or a specific pixel width
          height="100%"
          title="Embedded Resume" // Add a title for accessibility
        ></iframe>
      </div>
    </div>
  );
}

export default ResumeEmbed;
