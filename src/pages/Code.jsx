import React from 'react'
import Postcard from '../components/Postcard'

function Code() {
  return (
      <div className="container mx-auto px-12 py-12 space-y-12">

      <div className="grid gap-8 lg:grid-cols-4">
      <div className="sidebar bg-lightest-violet w-80 h-100">
         hello 
        </div>
        <Postcard heading="About"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse laudantium nulla culpa eligendi, iste dicta magni ut vel optio in. Sed consequuntur explicabo natus dicta voluptas quisquam numquam provident."
      />
      </div>
      </div>
  )
}

export default Code
