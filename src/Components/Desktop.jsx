import React from 'react'
import './Desktop.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Skills from './Skills';
import { useState } from 'react';

function Desktop() {
    const [skillsVisible, setSkillsVisible] = useState(false)

    const toggle = () => {
      setSkillsVisible(!skillsVisible)
    }

  return (
    <>
    <i class="bi bi-floppy" onClick={toggle}></i>


    <i class="bi bi-person"></i>
    <i class="bi bi-gear"></i>
    <i class="bi bi-envelope-exclamation"></i>
    <i class="bi bi-file-earmark-text"></i>

    <Skills isVisible={skillsVisible}/>

    <style jsx> {`
    #skills-container{
        display: ${skillsVisible ? 'block' : 'none'};
    }
    `}
    </style>
    </>
    
  )
}

export default Desktop