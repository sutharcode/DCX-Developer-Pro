import React from 'react'

const About = () => {
  return (
    <>
    <section>
      <div className="centered text-4xl h-screen">
        <h2>DCX Developer Directory</h2>
        <br/>
        <h5 style={{"color":"#006DCC"}}>Who Are We?</h5>
        <p style={{"marginLeft":"0.9rem"}}> We are a fictional website and service that list top web developers around the World. 
            Search and Browse fictional web developers on our website absolutley FREE!.</p>

        <h5 style={{"color":"#006DCC"}}>What Skills Do Our Developers Have? </h5>
        <p style={{"marginLeft":"0.9rem"}}> Our listed fictional developers skills range from Graphic design with Photoshop.
            Illustrator and Fireworks to markup languages like HTML5, XHTML and XML to programming languages such as 
            JavaScript PHP, Python and ASP. </p>  

        <br/>
        <br/>    
            
        <div class="embed-responsive embed-responsive-4by3">
        <iframe width="400" height="250" src="https://www.youtube.com/embed/VS6UOyTb5eU" 
            frameborder="0" allowfullscreen></iframe>
        </div>    
          
      </div>
    </section>
  </>
  )
}

export default About