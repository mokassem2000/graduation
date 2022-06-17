import React, { Component } from 'react';
import Nav from '../component/navbar';
import {Link} from "react-router-dom"
import {BsFacebook} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {MdOutlineCoronavirus} from "react-icons/md";

class Landig extends Component {
    state = {  } 
    render() { 
        return (
            <>
               
                <div className='bg-gray-200 min-h-[calc(100vh-52px)] px-5  md:px-20 pt-10 '>
                 <MdOutlineCoronavirus className="text-green-400 z-10 absolute text-9xl  left-40 opacity-40"></MdOutlineCoronavirus>
                    <div className="flex  items-center justify-center">
                  
                        {/* text container */}
                        <div className="md:w-1/2  md:text-left text-center relative z-50">
                            <MdOutlineCoronavirus className="text-green-400 z-10 absolute text-9xl opacity-40  top-20"></MdOutlineCoronavirus>
                            
                            <MdOutlineCoronavirus className="text-green-400 z-10 absolute text-9xl left-60 opacity-40  bottom-0" ></MdOutlineCoronavirus>
                            <h1 className='text-3xl md:text-4xl lg:text-6xl mb-5 md:mb-8 select-none z-50 relative'>The covid-19 Robot</h1>
                            <p className='text-lg leading-9 select-none z-50 relative'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br></br> Illum ipsum non quasi fugit animi nam ad! Libero hic cumque asperiores molestias similique omnis nostrum nisi. Est eos laborum molestiae? Voluptatum.</p>
                            <p className="flex mt-8 justify-center md:justify-start">
                               <a href='#'><BsFacebook className="mr-10 text-2xl hover:text-blue-800"></BsFacebook></a> 
                                <a href="#"><BsGithub className="mr-10 text-2xl hover:text-gray-600"></BsGithub ></a>
                                <a  href="#"><BsTwitter className=" text-2xl hover:text-cyan-400"></BsTwitter></a>
                            </p>
                        </div>  
                        {/* text container */}
                        {/* imge container */}
                        <div className='w-1/2  mt-5 hidden  md:block' >
                            <img src="images/doctor.svg" alt="doctor" />
                        </div>
                        {/* imge container */}
                    </div>
                    <div className="flex justify-center mt-12">
                        <div className='bg-gray-200 border-2 border-gray-800 w-fit p-3 rounded hover:bg-gray-800 hover:text-white transition duration-500 '><Link to="/Starting">lets start</Link></div>
                    </div>

                 
                </div>
            
            
            </>
        );
    }
}
 
export default Landig;
