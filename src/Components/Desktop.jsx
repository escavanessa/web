import React from 'react'
import './Desktop.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Skills from './Skills';
import Info from './Info';
import { useState } from 'react';

function Desktop() {
    const [skillsVisible, setSkillsVisible] = useState(false)

    const showBox = () => {
      if (!skillsVisible) {
        setSkillsVisible(true)
      }
    }

    const hideBox = () => {
      if (setSkillsVisible) {
        setSkillsVisible(false)
      }
    }

  return (
    <>
    <i class="bi bi-floppy" onClick={showBox}></i>


    <i class="bi bi-person"></i>
    <i class="bi bi-gear"></i>
    <i class="bi bi-envelope-exclamation"></i>
    <i class="bi bi-file-earmark-text"></i>

    <Skills isVisible={skillsVisible} 
    hideBox = {hideBox}
    />
    <Info />
    

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