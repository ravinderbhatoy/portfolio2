import React from 'react'

function Postcard({heading, subHeading, description,icon,image, imageOnly, fontNormal, paraText}) {
  return (
    <article>
      {imageOnly ?
        <div>
         <div className='bg-hard-violet text-ex-light-violet font-heading text-2xl flex gap-4'>
            <div className='w-3 bg-lightest-violet h-3 my-auto ms-3'></div>
            <div className='flex justify-between w-full'>
              <div>
                <h4 className={fontNormal ? "font-normal text-lg" : ""}>{heading}</h4>
              </div>
            </div>
          </div> 
            <img src={image} alt={image}/>
        </div>
        : 
        <div>
          <div className='bg-hard-violet text-ex-light-violet font-heading text-2xl flex gap-4'>
            <div className='w-3 bg-lightest-violet h-3 my-auto ms-3'></div>
            <div className='flex justify-between w-full'>
              <div>
                <h4 className={fontNormal ? "font-normal text-lg" : ""} >{heading}</h4>
                {subHeading && 
                  <p className='font-normal text-base'>{subHeading}</p>
                }
              </div>
              {icon ? 
              <div className={`bg-light-violet flex justify-center ${subHeading ? 'p-2' : 'p-1'}`}>
                <img className="" src={icon} alt="" />
              </div>
                : ""
            }
            </div>
          </div>
          <div  className='bg-lightest-violet font-normal p-6'>
            <div className={paraText ? "para-text" : ""} dangerouslySetInnerHTML={{__html: description}}/>
            {image ? 
              <img className="w-full max-w-96 mx-auto" src={image} alt="image"/> 
              : ""}
          </div>
        </div>
      }
    </article>
  )
}

export default Postcard
