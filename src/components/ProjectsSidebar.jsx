import React from 'react'
import Content from '../../public/content/content'
import { useEffect, useState } from 'react';

function ProjectsSidebar() {

  const items = Content.projects

 const [animatedItems, setAnimatedItems] = useState([]);

  useEffect(() => {
    let delay = 0;
    const newAnimatedItems = items.map((item, index) => ({
      ...item,
      animated: false,
      delay: delay += 150, // Adjust delay (milliseconds) as needed
    }));
    setAnimatedItems(newAnimatedItems);
  }, [items]);

  useEffect(() => {
    animatedItems.forEach((item) => {
      if (!item.animated) {
        setTimeout(() => {
          setAnimatedItems((prevItems) => {
            return prevItems.map((prevItem) =>
              prevItem.id === item.id ? { ...prevItem, animated: true } : prevItem
            );
          });
        }, item.delay);
      }
    });
  }, [animatedItems]);


  return (
    
    <div className="flex gap-1">
      <div className="bg-light-violet w-5"></div>
      <div className="bg-light-violet w-3"></div>
      <div className="sidebar bg-ex-light-violet w-full h-full p-2 space-y-4 overflow-y-auto">
        <div className="bg-hard-violet flex px-2 py-1 gap-2">
          <div className='w-4 bg-lightest-violet h-4 my-auto'></div>
          <h3 className="text-ex-light-violet text-lg">Overview</h3>
        </div>
        <h2 className="text-hard-violet font-heading text-3xl">Projects</h2>
  {animatedItems.map((item) => (
        <div
          key={item.id}
            style={{
              opacity: item.animated ? 1 : 0, // or visibility: item.animated ? 'visible' : 'hidden'
            }}
            className={` bg-light-violet flex px-2 py-1 gap-2
            ${item.animated ? 'animate__animated animate__fadeInLeft' : ''}
          `}
        >
          <div className='w-4 bg-hard-violet h-4 my-auto'></div>
            <h3 className="text-hard-violet text-lg"><a href={"#"+item.id}>{item.title}</a></h3>
        </div>
      ))}
      </div>
    </div>
  )
}

export default ProjectsSidebar
