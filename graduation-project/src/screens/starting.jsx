import React from 'react'
import {Link} from 'react-router-dom'
import { GiVintageRobot} from "react-icons/gi";
import {GiReceiveMoney} from "react-icons/gi";
import {FaCameraRetro} from "react-icons/fa";;
function Starting() {
  return (
   <>
   <div className="px-20 relative h-screen">
       
       <div><Link  to="/"><h3 className='border  w-fit p-2  hover:bg-gray-800 font-bold cursor-pointer mt-3 hover:text-white'>Go back</h3></Link></div>
       
        <div className='flex items-center'>
          
           <div className="mt-10  ">
                   <h1 className="text-5xl font-bold">Getting Started</h1>
                   <div className='mt-8 mb-10'>
                       <h2 className='text-2xl'>This page is an overview of the project documentation </h2>
                       <p className='mt-8 text-xl text-gray-500'>In this website We aim to show you how it has been built and not just as documentation </p>
               


                   </div>
                   <div className='w-4/5'><hr ></hr></div>
                   <div className='mt-5'>
                       <ul className='list-disc ml-5'>
                           <li className='mb-2 bg-blue-100 w-fit text-xl'><Link to="/components">Component</Link></li>
                           <li className='mb-2 bg-blue-100 w-fit text-xl'><Link to="/overView">building</Link></li>
                           <li className='mb-2 bg-blue-100 w-fit text-xl'><Link to="/project_code">Code</Link></li>
                           <li className='mb-2 bg-blue-100 w-fit text-xl'><Link to="/videos">Video</Link></li>
                           <li className='mb-2 bg-blue-100 w-fit text-xl'><Link to="/Problempage">Problems</Link></li>
                           <li className='mb-2 bg-blue-100 w-fit text-xl'><a href=".\1st mate.html">modeling</a></li>
                       </ul>
                   </div>
                   <div className='w-4/5 mt-10'><hr></hr></div>
                   <div>
                   
                       
                   </div>



           </div>
           <div className='pt-20'><img src="images/person-fighting.webp" alt="robot   " /></div>

       </div>       
      
   </div>
     <div className="bg-gray-200 px-20 py-10  text-center">
     <div>
         <h2 className="text-3xl font-bold ">What is  covid-19 Robot?</h2>
         <p className="text-xl mt-5 ml-5">
            The main idea of this project is to build a robot that has the ability to perform
            many functions simulating artificial intelligence without using artificial intelligence
            and using it in many different things or fields. 
            covid-19 robot is designed for aAvoiding direct connection with a Corona patient 
            to protect doctors and nurses,the medical team in general this is the core idea of our project.
         </p>
         



     </div>

     {/* ========================================================= */}
     
<div class="sm:flex flex-wrap justify-center items-center text-center gap-8 mt-20">
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg width="20" height="20" fill="currentColor" class="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                    </path>
                </svg>
            </div>
        </div>
        <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
        reliable
        </h3>
        <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
            Encompassing today’s website design technology to integrated and build solutions relevant to your business.
        </p>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <FaCameraRetro></FaCameraRetro>
            </div>
        </div>
        <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            bulit-in camera
        </h3>
        <p class="text-md text-gray-500 dark:text-gray-300 py-4">
            Share relevant, engaging, and inspirational brand messages to create a connection with your audience.
        </p>
    </div>
    
    
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <GiReceiveMoney></GiReceiveMoney>
            </div>
        </div>
        <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
           cheap
        </h3>
        <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
            Let us help you level up your search engine game, explore our solutions for digital marketing for your business.
        </p>
    </div>
</div>

     
     </div>
   </>
    
  )
}

export default Starting;
{/* <div>
<h2 className='mt-10 text-2xl font-bold'>What we are building</h2>



</div> */}