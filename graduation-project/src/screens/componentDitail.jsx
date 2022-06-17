import React from 'react'
import products from "../product"
import {useParams,Link} from 'react-router-dom'
function ComponentDitail() {
  let myid=useParams()
  let [myproduct]=products.filter((item)=>{
             return   item['_id'] === myid._id;
  })
 
  return (
    <div className='min-h-screen pt-10 px-5 md:px-20 bg-white '>
       <Link to="/components"><h3 className='border  w-fit p-2 bg-gray-800 hover:bg-white font-bold cursor-pointer text-white hover:text-black'>Go back</h3></Link>
      <div className='flex justify-between flex-wrap  mt-10  '>
        
       <div className='w-full md:w-full lg:w-96 '><img src={`${myproduct.image}`} className="w-full border border-gray-600 md:border-none"></img></div>
       <div className='w-full md:full lg:w-1/2 p-5  px-5 mt-10 lg:mt-0  mb-5 border border-gray-600 md:border-none '>
         <h1 className='text-5xl mb-5'>{myproduct.name}</h1>
         <hr className='text-gray-600'/>
         <h2 className='my-2 font-bold'>Description:</h2>
         <p className='leading-8 text-lg mb-2 ml-3'>{myproduct.description}</p>
         <h2 className='my-2 font-bold'>Features:</h2>
         <ul>
           {myproduct.feature.map((item)=>{
             return <li  key={myproduct._id} className='list-disc ml-8'>{item}</li>
           })}
           {/* <li className='list-disc ml-8'>It is opensource both in term of hardware and software</li>
           <li  className='list-disc ml-8'>It can perform serial communication with the computer using USB.</li>
           <li  className='list-disc ml-8 '>It only needs 5V to power up</li>
           <li  className='list-disc ml-8'>The recommended input voltage is 7-12V while the operating voltage is 5V for most of the Arduino boards.</li> */}
         </ul>
    
       </div>
    </div>
   

    </div>
    
  )
}

export default ComponentDitail;