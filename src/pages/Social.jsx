import React from 'react'
import Navbar from '../components/Navbar'
import SocialLink from '../components/SocialLink'

function Social() {
  return (
    <div className="container mx-auto py-12 md:px-12">
      <Navbar/>
      <div className="bg-hard-violet w-full h-5 opacity-70 mt-12"></div>
        <p className='bg-lightest-violet p-6 text-lg w-full my-6'>
          You can find me on the following social networks, though I'm not necessarily very active on all of them.<br/>
          Any account not listed below that uses my name or one of my handles may not be me.
          This is the only domain I use for my personal website.
        </p>
      <div className='mx-auto flex flex-wrap gap-8 '>
        <SocialLink
          title="Github"
          icon="/logo/github.svg"
          link="https://github.com/ravinderbhatoy"
        />
        <SocialLink
          title="Instagram"
          icon="/logo/instagram.svg"
          link="https://www.instagram.com/binduuyy"
        />
        <SocialLink
          title="Reddit"
          icon="/logo/reddit.svg"
          link="https://www.reddit.com/user/ray_pamber/"
        />
      <SocialLink
          title="Facebook"
          icon="/logo/facebook.svg"
          link="https://www.facebook.com/ravinder.bhatoy.1"
        />
      <SocialLink
          title="Telegram"
          icon="/logo/telegram.svg"
          link="https://t.me/binduuyy"
        />
      <SocialLink
          title="Whatsapp"
          icon="/logo/whatsapp.svg"
          link="disable"
        />
        <SocialLink
          title="Snapchat"
          icon="/logo/snapchat.svg"
          link="https://www.snapchat.com/add/binduyy"
        />
        <SocialLink
          title="Mail"
          icon="/logo/mail.svg"
          link="mailto:ravinderd.bhatoy@gmail.com"
        />
        <SocialLink
          title="LeetCode"
          icon="/logo/leetcode.svg"
          link="https://leetcode.com/u/zrpZTiWq3S/"
        />
      </div>
    </div>
  )
}

export default Social
