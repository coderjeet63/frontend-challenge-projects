import React from 'react'

function ReasonsToJoin() {
    
const reasonsToJoin = [
  {
    id: 1,
    title: "Enjoy on your TV",
    description:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: "tv", // reference (icon/component later)
  },
  {
    id: 2,
    title: "Download your shows to watch offline",
    description:
      "Save your favourites easily and always have something to watch.",
    icon: "download",
  },
  {
    id: 3,
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: "watch",
  },
  {
    id: 4,
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    icon: "kids",
  },
];



  return (
    <div className='flex flex-col lg:flex-row gap-8 border-b border-b-white '>
      {reasonsToJoin.map((reason) => (
        <div key={reason.id} className='flex flex-col gap-4 bg-blue-600 p-2'>
          <div className='text-xl font-bold'>{reason.title}</div>
          <div className='text-blue-950 text-white font-bold'>{reason.description}</div>
        </div>
      ))}
    </div>
  )
}

export default ReasonsToJoin