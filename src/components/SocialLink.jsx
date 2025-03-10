import React from 'react'

function SocialLink({title, icon, link}) {
  return (
    <div className='group text-lightest-violet md:max-w-28 flex-1 animate__animated animate__fadeInLeft'>
      <p className='font-semibold transition delay-75 text-center p-1 bg-hard-violet group-hover:bg-lightest-violet group-hover:text-hard-violet'>{title}</p>
      <div className='relative'>
        <a href={link}>
          <div className='p-6 bg-lightest-violet'>
            <img className='w-full min-w-12 max-w-14 mx-auto' src={icon} alt={title}/>
          </div>
          <div class="invisible group-hover:visible absolute top-0 left-0 w-full h-full bg-hard-violet opacity-20 pointer-events-none"></div>
        </a>
      </div>
    </div>
  )
}

export default SocialLink
