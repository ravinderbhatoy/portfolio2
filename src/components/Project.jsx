import React from 'react'
import Postcard from './Postcard'

function Project({id,title, imageTitle, image, description, bulletPoints}) {
  return (
    <div id={id} className="grid lg:grid-cols-2 gap-8 h-auto">
      <Postcard heading={imageTitle} image={image} imageOnly={true} fontNormal={true}/>
      <Postcard heading={title} fontNormal={true}
        bulletPoints={bulletPoints}
      />
    </div> 
  )
}

export default Project
