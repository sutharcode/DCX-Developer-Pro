import React from "react";

import NavPage from "./NavPage";
import Sidebar from './Sidebar'
import Navbar from "./Navbar/Navbars";

const MainPage = () => {
  return (
    <div >
      {/* heading section */}
      
        <div>
          <Navbar />
        </div>



        <div class="row" style={{"padding":"1rem"}} >
        <div class="card text-white  mb-3" style={{"maxWidth": "14rem","maxHeight":"25rem","marginLeft": "10rem", "backgroundColor":"#006DCC","padding":"1rem"}}>
  
  <div class="card-body" style={{}}>
    <h5 class="card-title">Links</h5>
    <p class="card-text"  ><Sidebar/></p>
  </div>
</div>
          
  {/*<div class="col-sm-6" style={{}}>
    <div class="card" style={{"width":"65%"}}>
      <div class="card-body">
        <h5 class="card-title">Links</h5>
        <p class="card-text"><Sidebar/></p>
      
      </div>
    </div>
  </div>*/}
  <div class="col-sm-6">
    <div class="card" style={{"border":"4px solid #006DCC","borderRadius":"8px","width":"115%"}}>
      <div class="card-body" style={{"minHeight":"20rem"}}>
        
        <NavPage/>
       
      </div>
    </div>
  </div>
</div>


<div class="container my-5">

<footer >
  <div class="container p-5">
    <div class="row">

    <div class="text-center p-2" style={{"backgroundColor": "black","color":"white"}}>
      © 2020 Copyright:
      <a class="text-dark"  href="https://mdbootstrap.com/"><span style={{"color":"white"}}>DCX Developer Directory</span></a>
    </div>
 
    </div>
    </div>
  </footer>

</div>
    


  

      
    </div>
    
  );
};

export default MainPage;