import React from 'react'

function Postcard({heading, subHeading, description,icon,image, imageOnly, fontNormal, paraText,bulletPoints, date}) {
  return (
    <article className="h-full animate__animated animate__fadeIn animate__slow"> {/* Added h-full here */}
      {imageOnly ? (
        <div className="h-full flex flex-col"> {/* Added h-full and flex column here */}
          <div className="bg-hard-violet text-ex-light-violet font-heading text-2xl flex gap-4">
            <div className="w-3 bg-lightest-violet h-3 my-auto ms-3"></div>
            <div className="flex justify-between w-full">
              <div>
                <h4 className={fontNormal ? "font-normal text-lg" : ""}>{heading}</h4>
              </div>
            </div>
          </div>
          <img src={image} alt={image} className="flex-grow object-cover"/> {/* Added flex-grow and object-cover */}
        </div>
      ) : (
          <div className="h-full flex flex-col"> {/* Added h-full and flex column here */}
            <div className="bg-hard-violet text-ex-light-violet font-heading text-2xl flex gap-4">
              <div className="w-3 bg-lightest-violet h-3 my-auto ms-3"></div>
              <div className="flex justify-between w-full align-middle">
                <div className='flex flex-col'>
                  <h4 className={fontNormal ? "font-normal text-lg" : "text-md my-auto"}>{heading}</h4>
                  {date && <span className="text-xs font-normal pb-1">{date}</span>}
                </div>
                {icon ? (
                  <div className={`bg-light-violet flex justify-center ${date ? "p-2" : "p-1"}`}>
                    <img className="" src={icon} alt="" />
                  </div>
                ) : (
                    ""
                  )}
              </div>
            </div>
            <div className="bg-lightest-violet font-normal p-6 flex-grow flex flex-col"> {/* Added flex-grow and flex column here */}
              <div className={paraText ? "para-text" : ""} dangerouslySetInnerHTML={{ __html: description }} />
              {bulletPoints ? (
                <ul className="list-disc ps-4 leading-8">
                  {bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              ) : (
                  ""
                )}
              {image ? <img className="w-full max-w-96 mx-auto mt-auto" src={image} alt="image" /> : ""} {/* added mt-auto to image */}
            </div>
          </div>
        )}
    </article>  )
}

export default Postcard
