import React from 'react'
import '../cssChallenge/Netflix.css'
import Navbar from './Navbar'
import Main from './Main'
import Card from './Card'  
import ReasonsToJoin from './ReasonsToJoin.jsx'
import FAQ from './FAQ.jsx'

function NetflixClone() {
  return (
    <div className="main-netflix global-padding relative pt-20 ">
      <Navbar />
     <div className='space-y-7'>
       <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-white">
        <Main />
        
      </main>
      <Card />
      <ReasonsToJoin />
      <FAQ/>
     </div>
     
    </div>
  );
}


export default NetflixClone