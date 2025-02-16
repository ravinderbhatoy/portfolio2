import React from 'react'
import Navbar from '../components/Navbar'
import SocialLink from '../components/SocialLink'

function Social() {
  return (
    <div className="container mx-auto px-12 py-12 space-y-12 h-screen">
      <Navbar/>
        <div className="bg-hard-violet w-full h-5 opacity-70"></div>
        <div className='mx-auto flex flex-wrap gap-8'>
        <SocialLink
          title="Github"
          icon="/logo/github.svg"
          link=""
        />
        <SocialLink
          title="Instagram"
          icon="/logo/instagram.svg"
          link=""
        />
        <SocialLink
          title="Reddit"
          icon="/logo/reddit.svg"
          link=""
        />
      <SocialLink
          title="Facebook"
          icon="/logo/facebook.svg"
          link=""
        />
      <SocialLink
          title="Telegram"
          icon="/logo/telegram.svg"
          link=""
        />
      <SocialLink
          title="Whatsapp"
          icon="/logo/whatsapp.svg"
          link=""
        />
        <SocialLink
          title="Snapchat"
          icon="/logo/snapchat.svg"
          link=""
        />
        <SocialLink
          title="Mail"
          icon="/logo/mail.svg"
          link=""
        />
        <SocialLink
          title="LeetCode"
          icon="/logo/leetcode.svg"
          link=""
        />
        <SocialLink
          title="Coding Ninja"
          icon="/logo/codingninja.svg"
          link=""
        />
      </div>
    </div>
  )
}

export default Social
