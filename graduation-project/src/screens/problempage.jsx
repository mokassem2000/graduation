import React from 'react'
import {MdReportProblem} from "react-icons/md";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import {Link} from "react-router-dom"
function Problempage() {
  return (
      <>
        <div className="px-20 relative ">
        
        <div><Link  to="/"><h3 className='border  w-fit p-2  hover:bg-gray-800 font-bold cursor-pointer mt-3 hover:text-white'>Go back</h3></Link></div>
        <div className="fixed -z-10 w-96 right-7 mt-20"><img src="images/get-idea_1133.webp"/></div>
        <div className="text-center text-5xl mt-5 mb-20"><h1>The problems that have been faced</h1></div>
            <div className='w-2/3 mt-5'>
                <div className="mb-3"><h1 ><span className='text-xl mb-2 bg-black text-white w-fit h-fit p-1 rounded font-bold'>1</span><span className='ml-3 text-3xl font-bold'>The motors on the same side:</span>	</h1></div>
                <div className="border rounded-lg first-letter bg-red-200  p-5" ><span className='mb-2'><MdReportProblem className="text-3xl"></MdReportProblem></span>An error occurred in the connection of two motors using the Jumper Wire, as the positive side of the first motor contacted the negative side of the second motor, and this results when one of them moves in one direction and the other moves in the opposite direction.</div>
                <div className="border rounded-lg first-letter bg-green-200 mt-3 p-5" ><span><BsFillHandThumbsUpFill className="text-3xl"></BsFillHandThumbsUpFill></span>Reconnect the right sides with each other, by connecting the positive side to the positive side of the other motor, and similarly to the negative side, so that both motors can move in the same direction.</div>
            </div>   


            <div className='w-2/3 mt-20'>
                <div className="mb-3"><h1 ><span className='text-xl mb-2 bg-black text-white w-fit h-fit p-1 rounded font-bold'>2</span><span className='ml-3 text-3xl font-bold'>Sudden stop of motors</span>	</h1></div>
                <div className="border rounded-lg first-letter bg-red-200  p-5" ><span className='mb-2'><MdReportProblem className="text-3xl"></MdReportProblem></span>
                When the motors start moving, their speed is high, even though the amount of electrical energy entering the motors is the amount that it needs and there is no defect in it.

                  	And when trying to reduce the speed of the motors or the amount of energy used, some of the motors move and some of the motors do not move from one period to another due to the lack of energy.

                </div>
                <div className="border rounded-lg first-letter bg-green-200 mt-3 p-5" ><span><BsFillHandThumbsUpFill className="text-3xl"></BsFillHandThumbsUpFill></span>When the motors start moving, their speed is high, even though the amount of electrical energy entering the motors is the amount that it needs and there is no defect in it.

                             when trying to reduce the speed of the motors or the amount of energy used, some of the motors move and some of the motors do not move from one period to another due to the lack of energy.
                </div>
            </div>  




            <div className='w-2/3 mt-20'>
                <div className="mb-3"><h1 ><span className='text-1xl mb-2 bg-black text-white w-fit h-fit p-1 rounded font-bold'>3</span><span className='ml-3 text-3xl font-bold'>Bluetooth connection with each other</span>	</h1></div>
                <div className="border rounded-lg first-letter bg-red-200  p-5" ><span className='mb-2'><MdReportProblem className="text-3xl"></MdReportProblem></span>When I tried to connect two Bluetooth devices together after completing the code, the problem was that both of them could not recognize the other or see each other, although there is no problem with the code and that they both have the same pins and they should see each other.</div>
                <div className="border rounded-lg first-letter bg-green-200 mt-3 p-5" ><span><BsFillHandThumbsUpFill className="text-3xl"></BsFillHandThumbsUpFill></span>Through a long search on the Internet, it became clear that the problem is that both of them are not the same version of Bluetooth, the first was Bluetooth HC-05, and the other was Bluetooth HC-06.
                The solution was by connecting both together by recognizing the first Bluetooth mac from the second and vice versa, which caused him to be unable to connect to more than one Bluetooth except by changing the old mac to one of them and writing the new mac on it.
                </div>
            </div>   

            <div className='w-2/3 mb-10 mt-20'>
                <div className="mb-3"><h1 ><span className='text-xl mb-2 bg-black text-white w-fit h-fit p-1 rounded font-bold'>1</span><span className='ml-3 text-3xl font-bold'>Distance Sensor Adjustment (HC-SR04)</span>	</h1></div>
                <div className="border rounded-lg first-letter bg-red-200  p-5" ><span className='mb-2'><MdReportProblem className="text-3xl"></MdReportProblem></span>The distance sensor (HC-SR04) gives incorrect readings, and it cannot obtain a reading of more than two cm. If this distance is allowed, the reading becomes zero.</div>
                <div className="border rounded-lg first-letter bg-green-200 mt-3 p-5" ><span><BsFillHandThumbsUpFill className="text-3xl"></BsFillHandThumbsUpFill></span>This problem was solved by code, by using the conditional if to convert it from zero to the largest value of the sensor, which is thirty cm.
                Unfortunately, the cause of the problem is still unknown. We used other distance sensors (HC-SR04), but they gave the same problem.
                </div>
            </div>   
   
         
          
        </div>
      
      </>
    
  )
}

export default Problempage;