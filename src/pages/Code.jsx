import React from 'react'
import Postcard from '../components/Postcard'
import Navbar from '../components/Navbar'
import Content from '../../public/content/content';
import ProjectsSidebar from '../components/ProjectsSidebar';
import Project from '../components/Project';

function Code() {
  return (
    <div className="container mx-auto px-12 py-12 space-y-12 h-screen">
      <Navbar/>
      <div className="grid gap-8 lg:grid-cols-4 h-[calc(100vh-10rem)]">
       <ProjectsSidebar/> 
        <div className="lg:col-span-3 space-y-8 h-full lg:overflow-y-auto no-scrollbar ">
          <div>
            <Postcard heading="About"
              description={Content.about}
              image="/images/lain.png"
            />
          </div>
          <Project
            id="devsearch"
            title="Dev's platform using Django"
            imageTitle="DevSearch(Django)"
            image="/images/projects/devsearch.png"
            description="A platform for developers to showcase their projects and interact with each other."
          />
          <Project
            id="chatapp"
            title="Whatsapp-clone using ReactJS/Firebase"
            imageTitle="Chat-App(React/Firebase)"
            image="/images/projects/chat-app.png"
            description="A platform for developers to showcase their projects and interact with each other."
          />
          <Project
            id="blog-website"
            title="Blog Website using Flask"
            imageTitle="Bhatoy's Blog"
            image="/images/projects/bhatoy-blog.png"
            description="A platform for developers to showcase their projects and interact with each other."
          />
          <Project
            id="frontend-mentor"
            title="Vanilla HTML/CSS"
            imageTitle="Landing Page"
            image="/images/projects/frontend-mentor.png"
            description="A platform for developers to showcase their projects and interact with each other."
          />
          <Project
            id="dashboard-tailwindcss"
            title="Dashboard TailwindCSS"
            imageTitle="Dashboard TailwindCSS"
            image="/images/projects/feedback-hub.png"
            description="A platform for developers to showcase their projects and interact with each other."
          />
        </div>
      </div>
    </div>
  );
}

export default Code
