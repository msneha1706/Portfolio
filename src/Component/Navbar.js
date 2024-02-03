import React,{useState} from 'react';
import "./navbar.css";


function Navbar() {

    const [show,setShow]=useState(false)
    
    return (
        <div>
            <nav className='main-nav'>
                <div className='logo'>
                    <p><span style={{color:'pink'}}>S</span>neha</p>
                </div>
                <div className='item'>
                    
                    <ul>
                    <li><a href="#body">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#project">Project</a></li>
                </ul>
                    
                </div>

                <div className='icon' onClick={()=>setShow(!show)}>
                    {!show? <img src="https://i.pinimg.com/1200x/ee/c0/71/eec071442e9a1b8e017c5a7c1853b880.jpg" />:
                    <img src="https://png.pngtree.com/png-vector/20190429/ourmid/pngtree-vector-cross-icon-png-image_998226.jpg" />}
                </div>
            </nav>

            <div className={`item-hide  ${show?"show-nav":'item-hide'}`}>
                <ul>
                    <li><a href="#body">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#project">Project</a></li>
                </ul>
            </div>


        </div>
    )
}

export default Navbar