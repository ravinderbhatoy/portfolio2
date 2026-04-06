import Navbar from '../components/Navbar'
import SocialLink from '../components/SocialLink'
import PageHeading from '../components/PageHeading'

function Social() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-12">
      <Navbar/>
      <PageHeading
        title="Social"
        subtitle="The places where I am reachable and the profiles I actively use."
      />
      <div className="bg-light-violet w-full h-5 opacity-70 mb-7"></div>
      <div className='mx-auto flex flex-wrap gap-8 '>
        <SocialLink
          title="Github"
          icon="/logo/github.svg"
          link="https://github.com/ravinderbhatoy"
          delay={0}
        />
        <SocialLink
          title="Instagram"
          icon="/logo/instagram.svg"
          link="https://www.instagram.com/binduuyy"
          delay={120}
        />
        <SocialLink
          title="Reddit"
          icon="/logo/reddit.svg"
          link="https://www.reddit.com/user/ray_pamber/"
          delay={240}
        />
      <SocialLink
          title="Facebook"
          icon="/logo/facebook.svg"
          link="https://www.facebook.com/ravinder.bhatoy.1"
          delay={360}
        />
      <SocialLink
          title="Telegram"
          icon="/logo/telegram.svg"
          link="https://t.me/binduuyy"
          delay={480}
        />
      <SocialLink
          title="Whatsapp"
          icon="/logo/whatsapp.svg"
          link="#"
          delay={600}
        />
        <SocialLink
          title="Snapchat"
          icon="/logo/snapchat.svg"
          link="https://www.snapchat.com/add/binduyy"
          delay={720}
        />
        <SocialLink
          title="Mail"
          icon="/logo/mail.svg"
          link="mailto:ravinderd.bhatoy@gmail.com"
          delay={840}
        />
        <SocialLink
          title="LeetCode"
          icon="/logo/leetcode.svg"
          link="https://leetcode.com/u/zrpZTiWq3S/"
          delay={960}
        />
      </div>
    </div>
  )
}

export default Social
