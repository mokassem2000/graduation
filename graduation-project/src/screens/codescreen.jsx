import React from 'react'
import {Link} from "react-router-dom"
import CodeHighlite from '../component/codeHighlite'

// import get_cpp from '../cpp_code'
import myarr  from '../cpp_code'
function Codescreen() {
  return (
    <>
     <div className='pb-5 px-5 md:px-20'><Link  to="/"><h3 className='border  w-fit p-2  hover:bg-gray-800 font-bold cursor-pointer mt-3 hover:text-white'>Go back</h3></Link></div>

     <div class="px-5 md:px-20 pb-10">
      <div>
        <h2 className='text-4xl mb-3'>the car's code:</h2>
      </div>
       {myarr.map((item)=>{
        return( <>
         <div>
            <p className='mb-3 mt-2'><span classNmae="font-bold text-3xl">-</span>{item.code_text}</p>
            <div >
              <CodeHighlite  codeString={item.code}/>
            </div> 
          </div>
          <hr className='mt-10'></hr>
         </>)
          
       })}
      
      
    </div> 
    <div className='flex justify-end'>
     <div className='pb-5 px-5 md:px-20'><Link  to="/project_code/next"><h3 className='border  w-fit p-2 bg-gray-800 text-white  hover:bg-white font-bold cursor-pointer mt-3 hover:text-gray-800'>next</h3></Link></div>
    </div> 



     
  </>
   
  )
}

export default Codescreen