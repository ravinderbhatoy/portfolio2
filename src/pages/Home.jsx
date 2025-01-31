import React from 'react'
import Navbar from '../components/Navbar'
import ProfileBox from '../components/ProfileBox'
import Postcard from '../components/Postcard'

function Home() {
  return (
    <>
      <div className="container mx-auto px-12 py-12 space-y-12">
        <Navbar />
        <div className="grid gap-8 lg:grid-cols-4">
            <ProfileBox />
          <div className="lg:col-span-3 h-fit space-y-8">
            <Postcard
              heading={"Hi, I am Ravinder a coder."}
              subHeading="Living Great, Building Awesome Digital Experiences."
              description="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse laudantium nulla culpa eligendi, iste dicta magni ut vel optio in. Sed consequuntur explicabo natus dicta voluptas quisquam numquam provident.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse laudantium nulla culpa eligendi, iste dicta magni ut vel optio in. Sed consequuntur explicabo natus dicta voluptas quisquam numquam provident.
            "
            icon="/logo/intro-emote.svg"
            />
            <Postcard
              heading={"My Hobbies"}
              description="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse laudantium nulla culpa eligendi, iste dicta magni ut vel optio in. Sed consequuntur explicabo natus dicta voluptas quisquam numquam provident.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse laudantium nulla culpa eligendi, iste dicta magni ut vel optio in. Sed consequuntur explicabo natus dicta voluptas quisquam numquam provident.
            "
              icon="/logo/football.svg"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
