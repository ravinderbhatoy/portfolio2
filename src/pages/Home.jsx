import React from 'react'
import Navbar from '../components/Navbar'
import ProfileBox from '../components/ProfileBox'
import Postcard from '../components/Postcard'
import Content from '../../public/content/content'

function Home() {
  return (
    <>
      <div className="container mx-auto md:px-12 py-12 space-y-12">
        <Navbar />
        <div className="grid gap-8 lg:grid-cols-4">
            <ProfileBox />
          <div className="lg:col-span-3 h-fit space-y-8">
            <Postcard
              heading={"Welcome"}
              description={Content.intro}
              paraText={true}
              icon="/logo/intro-emote.svg"
            />
            <Postcard
              paraText={true}
              heading={"My Hobbies"}
              description={Content.hobbies}
              icon="/logo/football.svg"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
