import React from 'react'
import './Netflix.css'
import Navbar from '../NetflixComponents/Navbar'
import Main from '../NetflixComponents/Main'
import Card from '../NetflixComponents/Card'  
import ReasonsToJoin from '../NetflixComponents/ReasonsToJoin.jsx'
import FAQ from '../NetflixComponents/FAQ.jsx'

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