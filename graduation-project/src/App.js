import './App.css';
import Nav from './component/navbar';
import Landig from './screens/landing.jsx' 
import  Compo from './screens/Compo.jsx' 
import  Codescreen from './screens/codescreen' 
import  Codescreen2 from './screens/codescreen2' 
import   Videos from './screens/videos' 
import   OverView from './screens/overView' 
import   Problempage from './screens/problempage' 
import    Vid1 from './screens/movid/vid1' 
import    Vid2 from './screens/movid/vid2' 
import    Vid3 from './screens/movid/vid3' 

import  ComponentDitail from './screens/componentDitail.jsx' 
import  Starting from './screens/starting.jsx' 
import  Contact from './screens/contact.jsx' 
import { Routes, Route } from "react-router-dom";

function App() {

  return (
 
   <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Landig/>}/>
      <Route path="components" element={<Compo/>}/>
      <Route path="project_code" element={<Codescreen/>}/>
      <Route path="/project_code/next" element={<Codescreen2/>}/>
      <Route path="/components/:_id/ditail" element={<ComponentDitail/>}/>
      <Route path="/videos" element={<Videos/>}>
         <Route path="" element={<Vid1 />} />
         <Route path="vid2" element={<Vid2 />} />
         <Route path="vid3" element={<Vid3/>} />
         
      </Route>
      <Route path="/overView" element={<OverView/>}/>
      <Route path="/Problempage" element={<Problempage/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Starting" element={<Starting/>}/>
    </Routes>     
   </>
   
  );
}

export default App;
