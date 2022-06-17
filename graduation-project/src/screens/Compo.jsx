import React from "react"
import products from "../product"
import Product from "../component/Product"
import {useParams,Link} from 'react-router-dom'

function Compo() { 
  return (
            <>
             <main className="px-20 ">
                 <Link to="/"><h3 className='border  w-fit p-2 hover:bg-gray-800 font-bold cursor-pointer mt-3 hover:text-white'>Go back</h3></Link>
                 <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  py-10 ">
                   {products.map((item)=>{ return <Product item={item}/>})}
                 </div>  
             </main>
            </>
  )
}

export default Compo;