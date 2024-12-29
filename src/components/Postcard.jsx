import React from 'react'

function Postcard({heading, subHeading, description,icon}) {
  return (
    <article className='h-full overflow-hidden'>
        <div className='bg-hard-violet text-ex-ight-violet font-heading text-3xl px-6 py-2 flex gap-4'>
          <div className='w-4 bg-lightest-violet h-4 mt-2'></div>
          <div className='flex justify-between w-full'>
            <div>
            <h4>{heading}</h4>
            {subHeading && 
              <p className='font-normal text-lg'>{subHeading}</p>
            }
            </div>
            <div className={`bg-light-violet h-fit ${subHeading ? 'p-4' : 'p-2'}`}>
              <img src={icon} alt="" />
            </div>
          </div>
          </div>
        <div className='bg-lightest-violet font-normal p-6 h-full'>
          {description}
        </div>
    </article>
  )
}

export default Postcard