import React ,{Component} from "react";
import { FaBars } from "react-icons/fa";
// import { GrOverview} from "react-icons/gr";
import {GrSteps} from "react-icons/gr";
import { VscError } from "react-icons/vsc";
import { BiCodeCurly } from "react-icons/bi";
import {MdVideoSettings  } from "react-icons/md";
import {RiTeamFill  } from "react-icons/ri";
import {AiOutlineMedicineBox} from "react-icons/ai";
import {GiVintageRobot } from "react-icons/gi";
import {IoMdArrowDropdown } from "react-icons/io";
import {Link } from "react-router-dom";
import { FcBusinessContact } from "react-icons/fc";
import { CgComponents } from "react-icons/cg";
class Nav extends Component {
    state = {
        togle:false,    
        dropdown2:false,
      } 
    handellist=()=>{
        this.setState({ togle:this.state.togle ? false : true})

    }
    handedropdown2=()=>{
        this.setState({dropdown2:this.state.dropdown2? false : true})

    }
    render() { 
        return (
        <nav className="px-5 bg-gray-800 sm:px-5 md:px-20 sm:py-0 py-2 relative">
             <div className=" flex justify-between max-w-7xl items-center ">
                    <div className="text-white" itemID="Logo">
                        <h1 className=" text-3xl cursor-pointer"><Link to="/"><span className="flex"><AiOutlineMedicineBox className="text-red-400"/><GiVintageRobot></GiVintageRobot></span></Link></h1>
                    </div>
                     {/*=======================  links=========================== */}
                    <ul className="flex hidden sm:flex ">
                        {/* <li className="px-3 py-2"><Link to="/overView" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"><GrSteps className="text-xl mr-2 text-yello-500"></GrSteps> Steps</Link></li> */}
                        <li className="px-3 py-2"><Link to="project_code" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"><BiCodeCurly className="text-xl mr-2 text-cyan-500"></BiCodeCurly> Code</Link></li>
                        <li className="px-3 py-2"><Link to="/overView" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"><GrSteps className="text-xl mr-2 text-white"></GrSteps> Steps</Link></li>
                                                
                                                {/*======================= dropdowen links=========================== */}
                        <li className="px-3 py-2 relative "><Link to='/videos'><span  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium   relative flex items-center" ><MdVideoSettings className="text-xl mr-2 text-red-500" ></MdVideoSettings>Videos</span></Link> </li>
                        <li className="px-3 py-2 "><span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center relative" onClick={this.handedropdown2}>More <IoMdArrowDropdown className="ml-5"/>
                        {this.state.dropdown2 && <ul className="absolute bg-gray-800 w-32 rounded  overflow-hidden  border-t-2 border-white z-50  left-0 top-full mt-2">
                                            <li className="cursor-pointer px-2 py-1 hover:bg-gray-700 "><Link to="/Problempage" className="text-white"><span className="mr-1"><VscError className="text-yellow-500 inline"></VscError></span>problems</Link></li>
                                            <li className="cursor-pointer px-2 py-1 hover:bg-gray-700"><Link to="/components" className="text-white"><CgComponents className="inline mr-1 text-white"></CgComponents>components</Link></li>
                                            <li className="cursor-pointer px-2 py-1 hover:bg-gray-700"><Link to="/contact" className="text-white"><FcBusinessContact className="inline mr-1"></FcBusinessContact>contact us</Link></li>
                        
                                </ul>}

                        
                        </span>
                               
                        </li>
                         {/*======================= dropdowen links=========================== */}
                    </ul>
                     {/*=======================  links=========================== */}
                    <FaBars className="sm:hidden text-3xl text-white cursor-pointer" onClick={this.handellist}></FaBars>
               </div>

               {this.state.togle && <ul  className={`sm:hidden mt-5 `}>
                   <li className="py-2 text-white text-lg"><a href="#" className="flex  items-center hover:text-gray-700"> <RiTeamFill className="text-xl mr-2"/>Teame</a></li>    
                   <li className="py-2 text-white text-lg"><a href="#" className="flex  items-center hover:text-gray-700"> <RiTeamFill className="text-xl mr-2"/> Link</a></li>    
                   <li className="py-2 text-white text-lg"><a href="#" className="flex  items-center hover:text-gray-700"> <RiTeamFill className="text-xl mr-2"/> Link</a></li>    
               </ul> }   
        </nav>
          
        );
    }
}
 
export default Nav;