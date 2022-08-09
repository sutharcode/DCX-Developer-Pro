import React from 'react'

const Home = () => {
  return (
    <>
    <h4>DCX Developer Directory!</h4>
  <div class="row g-0">
 
    <div class="col-md-6">
      <div class="card-body">
        <h6 style={{"color":"#006DCC"}}>Who Are We?</h6>
        <p style={{"marginLeft":"0.9rem","fontSize":"10px"}}> We are a fictional website and service that list top web developers around the World. 
            Search and Browse fictional web developers on our website absolutley FREE!.</p>

        <h6 style={{"color":"#006DCC"}}>What Skills Do Our Developers Have? </h6>
        <p style={{"marginLeft":"0.9rem","fontSize":"10px"}}> Our listed fictional developers skills range from Graphic design with Photoshop.
            Illustrator and Fireworks to markup languages like HTML5, XHTML and XML to programming languages such as 
            JavaScript PHP, Python and ASP. </p>
      </div>
    </div>
    <div class="col-md-6">
    <img src="./web.png" class="img-fluid rounded-start" alt="..."/>
    </div>
  </div>




  </>
  )
}

export default Home