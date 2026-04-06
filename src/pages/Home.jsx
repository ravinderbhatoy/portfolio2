import Navbar from '../components/Navbar'
import ProfileBox from '../components/ProfileBox'
import Postcard from '../components/Postcard'
import Content from '../../public/content/content'

function Home() {
  return (
    <>
    <div className="container mx-auto md:px-12 py-12 space-y-12 min-h-[calc(100vh-3rem)]">
    <Navbar />
    <div className="grid gap-8 lg:grid-cols-4 h-full lg:overflow-y-auto no-scrollbar scroll-smooth">
    <ProfileBox delay={0} />
    <div className="lg:col-span-3 h-fit space-y-8">
      <Postcard
      paraText={true}
      date={'April 6, 2026'}
      heading={"What I am doing currently"}
      description={Content.current}
      icon="/logo/football.svg"
      delay={120}
      />
      <Postcard
      paraText={true}
      heading={"Hobbies & Interests"}
      description={Content.hobbies}
      icon="/logo/football.svg"
      delay={240}
      />
    <Postcard
      paraText={true}
      heading={"My Daily Drivers"}
      description={Content.dailyDrivers}
      icon="/logo/football.svg"
      delay={360}
      />
      <div className="grid gap-8 md:grid-cols-3">
        <Postcard
          paraText={true}
          fontNormal={true}
          heading={"Projects"}
          description={Content.homePreviews.code}
          icon="/logo/code.svg"
          delay={480}
        />
        <Postcard
          paraText={true}
          fontNormal={true}
          heading={"Resume"}
          description={Content.homePreviews.resume}
          icon="/logo/resume.svg"
          delay={600}
        />
        <Postcard
          paraText={true}
          fontNormal={true}
          heading={"Find Me"}
          description={Content.homePreviews.social}
          icon="/logo/social.svg"
          delay={720}
        />
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Home
