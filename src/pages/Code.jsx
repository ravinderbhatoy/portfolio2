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
            bulletPoints={[
              "Built using Django and Bootstrap.",
              "Direct messaging to other users.",
              "Secure user authentication.",
              "PostgreSQL database reliable storage.",
              "Automated emails notify users upon registration.",
              "Forget password using email.",
            ]}
          />
          <Project
            id="chatapp"
            title="Whatsapp-clone using ReactJS/Firebase"
            imageTitle="Chat-App(React/Firebase)"
            image="/images/projects/chat-app.png"
            bulletPoints = {[
              "Chat application using React and Firebase.",
              "Google Sign-In authentication.",
              "Split-view layout chat and user management.",
              "Firebase's real-time database.",
              "Design and styling with Tailwind CSS.",
            ]}
          />
          <Project
            id="blog-website"
            title="Blog Website using Flask"
            imageTitle="Bhatoy's Blog"
            image="/images/projects/bhatoy-blog.png"
            bulletPoints={[
              "Built with Flask, Bootstrap.",
              "Markdown support for blog post creation.",
              "Comment on blog posts.",
              "User authentication.",
              "SQLite as a database.",
              "Live deployment and hosting on Render.",
            ]}    
          />
          <Project
            id="frontend-mentor"
            title="Vanilla HTML/CSS"
            imageTitle="Landing Page"
            image="/images/projects/frontend-mentor.png"
            bulletPoints = {[
              "Vanilla HTML and CSS.", 
              "Live using netlify.",
              "Fully responsive page.",
              "Clean and modern design for various screen sizes.",
            ]}
          />
          <Project
            id="dashboard-tailwindcss"
            title="Dashboard TailwindCSS"
            imageTitle="Dashboard TailwindCSS"
            image="/images/projects/feedback-hub.png"
            bulletPoints={[
              "Dashboard Design using TailwindCSS"
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Code
