import React, { useState } from 'react'
import axios from 'axios'
import './Contact.css'

function Contact() {

  const [name,setName] = useState('')
  const [email,setEmail ] = useState('')
  const [query,setQuery] = useState('')
  const [error,setError] = useState('')

  function select () {
    if(email.length<0){
      setError("Email")
      return
    }
    axios({
      url:'https://formspree.io/f/xleqjbgd',
      method:'post',
        data:{
          Name:name,
          email:email,
          Querry:query
        }
    }).then(()=>{
      setEmail('')
      setName('')
      setQuery('')
    })
  }
  return (
    <div className='contact-main' id="contact">
      <h1>Contact Us</h1>
        <div className='contact'>
            <div className='contact-logo'>
                
                <br/><br/>
                <div className='email-row'>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/554/456/small/envelope_014.jpg"/> 
                <span className='email'>msneha1706@gmail.com</span>
                </div>
                <br/><br/>

                <div className='email-row'>
                <img src="https://png.pngtree.com/element_our/sm/20180509/sm_5af2d4cf61c21.jpg"/>
                <span>9122619337</span>
                </div>
                <br/><br/>

                <div className='email-row'>
                <a href="https://www.linkedin.com/in/sneha-948584212" target="_blank"><img src="https://w7.pngwing.com/pngs/408/296/png-transparent-app-b-w-instagram-logo-media-popular-social-2018-social-media-black-and-white-logos-icon.png"/></a>
                <img src="https://w7.pngwing.com/pngs/408/296/png-transparent-app-b-w-instagram-logo-media-popular-social-2018-social-media-black-and-white-logos-icon.png"/>
                </div>
                <br/><br/>

                <a href="https://drive.google.com/file/d/1xuPYqXvoSVZJaG2xbQ1tuvsFZ4nFDvXy/view?usp=drivesdk" download target="_blank"><button>View CV</button></a>

            </div>

            <div className='contact-message'>

                <input className="msg" placeholder="Your Name" type='text' onChange={(e)=>setName(e.target.value)}/><br/><br/>
                <input style={{borderColor:error.length>0?"red":"white"}} className="msg" placeholder="Your Email" type='email' onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                <textarea id="w3review" name="w3review" className="msg1" placeholder="Your Message" rows="4" cols="150" onChange={(e)=>setQuery(e.target.value)}></textarea><br/><br/>
                <button onClick={()=>select()}>Submit</button>


            </div>
        </div>
    </div>
  )
}

export default Contact