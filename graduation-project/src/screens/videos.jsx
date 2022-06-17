import React from 'react'
import ReactPlayer from "react-player"
import {Link} from "react-router-dom";
import { Outlet } from "react-router-dom";
function Videos() {
  return (
    <div className="px-5 md:px-20 bg-gray-200 py-10 ">
      {/* <div className='flex justify-between'>
            <div >
            <ReactPlayer className="bg-black border border-yellow-300" playing url="./videos/frist.mp4"
                      height='450px'
                      width='700px'
                      controls='true'
                  />
            </div>
            <div className='border border-black  w-96 rounded-2xl overflow-hidden'>
                <div className="bg-gray-800 p-5">
                  <h2 className="text-4xl text-white mb-2  text-center">Descrption</h2>
                </div>
                <p className='p-5'>
                   in this video kareem show us how the robot deal with the obsticales.first thing he put the black tape on the floor
                   so the robot can move on the top of it.and you will see this in the video 
                   <hr></hr>
                </p>
                
            </div>
            
      </div> */}
      <Outlet></Outlet>
     
      <div className='flex py-10 border border-black rounded  mt-10  p-5'>
           <Link to="/videos"><div className='w-60 mr-5'><img src="images/Screenshot (171).png" alt="" /></div></Link>   
           <Link to="/videos/vid2"><div className='w-60 mr-5'><img src="images/Screenshot (171).png" alt="" /></div></Link>   
           <Link to="/videos/vid3"><div className='w-60 mr-5'><img src="images/Screenshot (171).png" alt="" /></div></Link>   
           
          
            
   
      </div>

    </div>
  )
}

export default Videos;