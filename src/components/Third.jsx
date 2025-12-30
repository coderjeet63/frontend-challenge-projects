import React from 'react'
import { useState } from 'react'

function Third() {
     
    const[messArray,setMessArray]=useState([]) 
    const [message, setMessage] = useState("")  

    const handlechange=(e)=>{
        setMessage(e.target.value)
    }

    const handleclick=()=>{
        setMessArray([...messArray,message])
        setMessage("")
    }
  return (
   
    <div className='min-h-screen bg-amber-100 flex flex-col'>
      
     
      <h1 className='text-center font-extrabold text-3xl text-black p-4'>
        Chat
      </h1>
<div className="mx-60 mb-10 rounded-2xl border-2 border-gray-300 flex-1 bg-white flex flex-col justify-end">
 
    {
    messArray.map((mess,index)=>(
      index%2===0 ?
       <div key={index} className="bg-gray-200 p-4 m-2 rounded-2xl max-w-xs">
        {mess}
      </div> :
       <div key={index} className="bg-blue-200 p-4 m-2 rounded-2xl max-w-xs">
        {mess}
      </div>
    ))  
    }

  
  <div className="flex mx-4 mb-4 gap-2">
    <input
     onChange={handlechange}
      type="text"
      className="w-full p-4 border-2 border-black"
      value={message}
    />
    <button onClick={handleclick} className="bg-blue-500 text-white p-4 rounded-tr-2xl rounded-br-2xl">
      Send
    </button>
  </div>

</div>


    </div>
  )
}

export default Third