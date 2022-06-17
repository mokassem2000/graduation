import React from 'react'
import ReactPlayer from "react-player"
function Vid1() {
  return (
    <div className='flex justify-between'>
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
    
</div>
      
  )
}

export default Vid1