import React, { useState } from 'react'
import pic from './two.jpeg'
import './about.css'

function About() {

    const [education, setEducation] = useState(true)
    const [skill, setSkill] = useState(false)
    const [experience, setExperience] = useState(false)

    function skillset() {
        setSkill(true)
        setExperience(false)
        setEducation(false)
    }

    function experienceset() {
        setSkill(false)
        setExperience(true)
        setEducation(false)
    }

    function educa() {
        setSkill(false)
        setExperience(false)
        setEducation(true)
    }

    return (
        <div className='main-main' id="about">
            <h1 style={{fontSize:"50px"}}>About Me</h1><br/><br/>
            <div className='main'>
                <div className='main-img'>
                    <img src={pic} />
                </div>

                <div className='main-content'>
                    <div style={{overflow:"hidden"}}>
                    <p data-aos="fade" data-aos-delay="100" style={{paddingLeft:"25px"}}>React.js is a powerful JavaScript library for building user interfaces, renowned for its simplicity, reusability,
                        and performance. Born out of Facebook's need for a more efficient way to manage their user interfaces, React has
                        become a cornerstone in modern web development.</p>

                    <ul className='ul'>
                        <li onClick={skillset}>Skills</li>
                        <li onClick={experienceset}>Experience</li>
                        <li onClick={educa}>Education</li>
                    </ul>

                    </div>
                    


                    <div className='desc'>
                        <div className={education ? 'education' : "abc"}>
                            <div>
                                <h2>B.E in Computer Science</h2>
                                <p>Sant Longowal Institute of Engineering and Technology</p>
                                <p>CGPA - 8.79/10</p>
                                <p>2020-2023</p>
                            </div>
                            <br/>
                            <br/>

                            <div>
                                <h2>Diploma in Computer Science</h2>
                                <p>Sant Longowal Institute of Engineering and Technology</p>
                                <p>CGPA - 8.97/10</p>
                                <p>2017-2020</p>
                            </div>
                            <br/>
                            <br/>

                            <div>
                                <h2>Matriculation</h2>
                                <p>St. Joseph's Sr. Sec. School</p>
                                <p>CGPA - 10/10</p>
                                <p>2017</p>
                            </div>
                            <br/>
                        </div>

                        <div className={skill ? 'skill' : "abc"}>
                            <ul>
                                <li>HTML</li>
                                <span className='progress' style={{width:"90%"}}>80%</span>
                                <li>CSS </li>
                                <span className='progress' style={{width:"85%"}}>80%</span>
                                <li>JavaScript</li>
                                <span className='progress' style={{width:"60%"}}>80%</span>
                                <li>Bootstrap </li>
                                <span className='progress' style={{width:"80%"}}>80%</span>
                                <li>React Js </li>
                                <span className='progress' style={{width:"70%"}}>80%</span>
                                <li>C </li>
                                <span className='progress' style={{width:"85%"}}>80%</span>
                                <li>Python </li>
                                <span className='progress' style={{width:"75%"}}>80%</span>
                            </ul>
                        </div>

                        <div className={experience ? 'experience' : 'abc'}>
                            <div>
                                <br/>
                                <br/>
                                <h1>Sarpweb Technology</h1>
                                <p>5 Months Internship in front-end web developer at Sarpweb Technology. Worked in team
                                    environment and also worked with github.</p>
                            </div>

                            <div>
                                <h1>LTTS</h1>
                                <p>6 Months Job in front-end web developer at LTTS. I gained exposure to building user interfaces, handling
                                    state management, utilizing component-based architecture, and integrating APIs. This foundational experience
                                    would have contributed to your understanding of React's core concepts and practices</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default About