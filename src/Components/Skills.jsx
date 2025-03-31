import React from 'react'
import './Skills.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from 'react';

function Skills() {
    const [isClosed, setIsClosed] = useState(false)


    const closeWindow = () => {
        setIsClosed(!isClosed)
    }



  return (
    <>
    <div id='skills-container'>
        <div id='skills-title'>
        <i id='skills-exit' class="bi bi-x-square" onClick={closeWindow}></i>
        skills.exe
        </div>

        <div id='skills-inner'>
        <i id='skill-icon' class="bi bi-filetype-js"></i>
        <i id='skill-icon' class="bi bi-filetype-html"></i>
        <i id='skill-icon' class="bi bi-filetype-css"></i>
        <i id='skill-icon'class="bi bi-filetype-jsx"></i>
        <i id='skill-icon' class="bi bi-bootstrap"></i>
        <i id='skill-icon' class="bi bi-git"></i>
        <i id='skill-icon' class="bi bi-cloud"></i>
        </div>
    </div>


    <style jsx> {`
    #skills-container{
        display: ${isClosed ? 'block' : 'none'};
    }
    `}
    </style>
    </>
  )
}

export default Skills