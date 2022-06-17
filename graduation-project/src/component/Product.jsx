import React from 'react'
import {Link} from "react-router-dom"
function Product({item}) {

  return (
    <div className="hover:border-gray-600  rounded-lg border border-gray-300 overflow-hidden shadow-md shadow-gray-100 bg-white " >
         <div className="border bottom-3 ">
            <Link to={`/components/${item['_id']}/ditail`}><img src={item["image"]} alt="comp" className="h-60 w-full"/></Link>
         </div>
         <div>
             <h3 className="text-center my-2 font-bold">{item.name}</h3>
             {/* <p className="px-2 pb-5 text-center">Lorem  kjiohui jih uojo kjhguokjpih jokjphoijpok </p> */}
        </div>
    </div>   
  )
}

export default Product