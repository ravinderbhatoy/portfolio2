import React from 'react'

function SocialLink({title, icon, link}) {
  return (
    <div className='w-fit'>
      <p className='bg-hard-violet text-lightest-violet font-semibold text-center p-1'>{title}</p>
      <a href={link}>
        <div className='p-6 bg-lightest-violet'>
          <img className='w-full max-w-14 h-full max-h-14' src={icon} alt={title}/>
        </div>
      </a>
    </div>
  )
}

export default SocialLink
