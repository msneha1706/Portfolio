import React from 'react'
import './project.css'

function Project() {
  return (
    <div className='project' id='project'>
        <h1 style={{fontSize:"50px"}}>Projects</h1>
        <div className='card-main'>

            <div className='card' data-aos='fade-up'>
                <h1>Sharvil Webpage</h1>
                <br/>
                <p>A web Development based project was created to interacts with client from anywhere in world. Basically, this is
                    for a start-up they connect with the client through this website and take project that is developed by their
                    developers.</p>
            </div>

            <div className='card' data-aos='fade-up'>
                <h1>COVAC</h1>
                <br/>
                <p>COVAC aims to give the location and all required details of the Vaccination Centre, Vaccination availability, present active cases
                    including COVID-related information on a web portal. It will provide vaccination-related information, precautions, 
                    etc. It also shows the cases and number of vaccinations taken across the world on a map.</p>
            </div>

            <div className='card' data-aos='fade-up'>
                <h1>School Website</h1>
                <br/>
                <p>It is made with HTML, CSS, React and Bootstrap. In this, we show about the school, their moto, about teacher
                    and a form where student where parents ask their query</p>     
            </div>

        </div>
    </div>
  )
}

export default Project