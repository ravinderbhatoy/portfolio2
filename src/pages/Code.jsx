import React from 'react'
import Postcard from '../components/Postcard'
import Navbar from '../components/Navbar'
import Content from '../../public/content/content';
import ProjectsSidebar from '../components/ProjectsSidebar';

function Code() {
  return (
    <div className="container mx-auto px-12 py-12 space-y-12 h-screen">
      <Navbar/>
      <div className="grid gap-8 lg:grid-cols-4 h-[calc(100vh-10rem)]">
       <ProjectsSidebar/> 
        <div className="lg:col-span-3 space-y-8 h-full overflow-y-auto no-scrollbar ">
          <div>
            <Postcard heading="About"
              description={Content.about}
              image="/images/lain.png"
            />
          </div>
          <div id="devsearch">
          <div className="grid lg:grid-cols-2 gap-8">
            <Postcard heading="DevSearch(Django)" image="/images/projects/devsearch.png" imageOnly={true} fontNormal={true}/>
            <Postcard heading="DevSearch(Django)" fontNormal={true}
              description="A platform for developers to showcase their projects and interact with each other."
            />
          </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Postcard heading="Chat-App(React/Firebase)" image="/images/projects/chat-app.png" imageOnly={true} fontNormal={true}/>
            <Postcard heading="Whatsapp-clone using ReactJS/Firebase" fontNormal={true}
              description="A platform for developers to showcase their projects and interact with each other."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Code
