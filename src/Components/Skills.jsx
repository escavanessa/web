import React from 'react'
import './Skills.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Frame } from '@react95/core';

function Skills(props) {


  return (
    <>
    <Frame id='skills-container' w="200px" h="100px" bgColor="$material" boxShadow="$out" padding="$4">
        <div id='skills-title'>
        <p className='skills-title'>skills.exe</p>
        <button id='skills-exitButton' onClick={props.hideSkills}>X</button>
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
    </Frame>
    </>
  )
}

export default Skills