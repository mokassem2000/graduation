import React from 'react'
import CodeHighlite from '../component/codeHighlite'
import {Link} from "react-router-dom"
import myarr2  from '../cpp_code2'
function Codescreen2() {
    return (
        <>
         <div className='pb-5 px-5 md:px-20'><Link  to="/project_code"><h3 className='border  w-fit p-2  hover:bg-gray-800 font-bold cursor-pointer mt-3 hover:text-white'>Go back</h3></Link></div>
    
         <div class="px-5 md:px-20 pb-10">
          <div>
            <h2 className='text-4xl mb-3'>code for the transmitter:</h2>
          </div>
           {myarr2.map((item)=>{
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
       
    
    
         
      </>
       
      )
}

export default Codescreen2