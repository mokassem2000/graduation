import React from 'react'

function OverView() {
  return (
    <div className='px-5 md:px-20'>
        <div className=' mt-8'>
            {/* <div >
                <h1 className='text-5xl w-fit mx-auto'>The sequence of bulding the project </h1>
            </div> */}
          <div className="text-center">
            <div  className='md:mt-8 mt-3 border border-gray-500 bg-yellow-100  p-5 w-1/2 mx-auto rounded-xl'>
                    <p>
                        <h2 className='text-3xl '>
                            Introduction
                        </h2>
                        <p className='leading-8 mt-2 text-gray-500'>
                            in this section we will talk about how we built this project in a number of steps.remember we will talk about the project from technical view .
                            and this will include the sequence we followed to build this project .i'm excited to show you this i hope you too.
                        </p>
                    </p>
                </div>



          </div>
            
            
            <div className='mt-10 mb-5'>
                <p className='text-gray-500 leading-8 '>
                    <span className='text-2xl font-bold text-blue-600'>Step 1:</span>  Connect the components as per the circuit diagram and then connect Arduino UNO to the system using the USB cable.
                </p>
                <div className='mt-2 ' >
                    <img src="./animationimages/What-is-Arduino-1.png.webp" className='w-1/4'></img>
                </div>
            </div>
            <div className='mt-10 mb-5'>
                <p className='text-gray-500 leading-8 '>
                    <span className='text-2xl font-bold text-blue-600'>Step 2:</span> we will add the the motor to our system which will carry our project and make it move in all directions you can think of it as the legs of the robot (:
                </p>
                <div className='mt-2 ' >
                    <img src="./animationimages/L298N Motor Module.jpg" className='w-1/4'></img>
                </div>
            </div>
            <div className='mb-5'>
                <p className='text-gray-500 leading-8'>
                    <span className='text-2xl font-bold text-blue-600'>Step 3:</span> The accelerometer sensors measure the acceleration by measuring the change in capacitance. Its structure has a mass attached to a spring which moves along one direction and has fixed outer plates. So, when acceleration is applied in any direction, the capacitance between the plates and the mass will change. This change in capacitance is measured and corresponds to the acceleration value.

                      <span>The Arduino reads these acceleration values from the sensor and then calculate the pitch and roll values using the functions provided by the MPU6050 library. These pitch and roll values are shown on the serial monitor output screenshot given below. Whenever we move the sensor, the pitch and roll values on the serial monitor will change according to the movement.</span> 
                </p>
                <div className='mt-2 ' >
                    <img src="./animationimages/Accelerometer_Interfacing_Diagram.png   " className='w-1/4'></img>
                </div>

            <div className='mb-5'>
                <p className='text-gray-500 leading-8'>
                    <span className='text-2xl font-bold text-blue-600'>Step 4:</span>  specified path we will use in this step the ir-sensor to read Infrared information for the black and white color That's why the way is determined.
                </p>
                <div className='mt-2 ' >
                    <img src="./animationimages/ir.png" className='w-1/4'></img>
                </div>
            </div>

            <div className='mb-5'>
                <p className='text-gray-500 leading-8'>
                    <span className='text-2xl font-bold text-blue-600'>Step 5:</span>  in this step we will use the Hc-Sr04-ultrasonic sensoer.This sensor measures can measure distance. It emits an ultrasound at 40 000 Hz (40kHz) which travels through the air and if there is an object or obstacle on its path It will bounce back to the module. Considering the travel time and the speed of the sound you can calculate the distance.
                </p>
                <div className='mt-2 ' >
                    <img src="./animationimages/hc.png" className='w-1/4'></img>
                </div>
            </div>
           
            </div>
            <div className='mb-20'>
                <p className='text-gray-500 leading-8'>
                    <span className='text-2xl font-bold text-blue-600'>Step 6:</span> here we added the camera to our project,which will enable us of seeing and communicate with the patient and make conversation with him. 
                </p>
                <div className='mt-2 ' >
                    <img src="./animationimages/camera.jpg" className='w-1/4'></img>
                </div>
            </div>
            <div className='mb-20'>
                <p className='text-gray-500 leading-8'>
                    <span className='text-2xl font-bold text-blue-600'>Step 7:</span> we connect MAX30100 with Arduino,and this for heart pulse rate monitor sensor. 
                </p>
                <div className='mt-2 ' >
                    <img src="./animationimages/Circuit-Diagram-2.webp" className='w-1/4'></img>
                </div>
            </div>
            <div className='mb-10'>
                <h1 className="text-5xl  text-gray-500 mb-4">The result:</h1>
                <div className='flex justify-between relative'>
                    <div>  <img src="./animationimages/one (1).jpg" className='w-1/2 border border-2 hover:absolute border-amber-700  hover:w-11/12 hover:h-11/12 z-10'></img></div>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default OverView