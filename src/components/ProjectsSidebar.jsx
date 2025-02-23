import React from 'react'

function ProjectsSidebar() {
  return (
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
  )
}

export default ProjectsSidebar
