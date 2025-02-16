import React from 'react'
import Postcard from '../components/Postcard'
import Navbar from '../components/Navbar'

function Code() {
  return (
    <div className="container mx-auto px-12 py-12 space-y-12 h-screen">
      <Navbar/>
      <div className="grid gap-8 lg:grid-cols-4 h-[calc(100vh-10rem)]">
        <div className="flex gap-1">
          <div className="bg-light-violet w-5"></div>
          <div className="bg-light-violet w-3"></div>
          <div className="sidebar bg-ex-light-violet w-full h-full p-2 space-y-4 overflow-y-auto">
            <div className="bg-hard-violet flex px-2 py-1 gap-2">
              <div className='w-4 bg-lightest-violet h-4 my-auto'></div>
              <h3 className="text-ex-light-violet text-lg">Overview</h3>
            </div>
            <h2 className="text-hard-violet font-heading text-3xl">Projects</h2>
            <div className="bg-light-violet flex px-2 py-1 gap-2">
              <div className='w-4 bg-hard-violet h-4 my-auto'></div>
              <h3 className="text-hard-violet text-lg"><a href="#devsearch">DevSearch(Django)</a></h3>
            </div>
            <div className="bg-light-violet flex px-2 py-1 gap-2">
              <div className='w-4 bg-hard-violet h-4 my-auto'></div>
              <h3 className="text-hard-violet text-lg">ChatApp (React/Firebase)</h3>
            </div>
            <div className="bg-light-violet flex px-2 py-1 gap-2">
              <div className='w-4 bg-hard-violet h-4 my-auto'></div>
              <h3 className="text-hard-violet text-lg">Project 1</h3>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 space-y-8 h-full overflow-y-auto no-scrollbar ">
          <div>
            <Postcard heading="About"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse laudantium nulla culpa eligendi, iste dicta magni ut vel optio in. Sed consequuntur explicabo natus dicta voluptas quisquam numquam provident."
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
