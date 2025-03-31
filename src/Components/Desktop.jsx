import React from 'react'
import './Desktop.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Skills from './Skills';
import Info from './Info';
import { useState } from 'react';

function Desktop() {
    const [skillsVisible, setSkillsVisible] = useState(false)
    const [infoVisible, setInfoVisible] = useState(false)
    

    const showSkills = () => {
      if (!skillsVisible) {
        setSkillsVisible(true)

      }
    }

    const showInfo = () => {
      if(!infoVisible) {
        setInfoVisible(true)
      }
    }

    const hideSkills = () => {
      if (setSkillsVisible) {
        setSkillsVisible(false)
      }
    }

    const hideInfo = () => {
      if (setInfoVisible) {
        setInfoVisible(false)
      }
    }

  return (
    <>
    <i class="bi bi-floppy" onClick={showSkills}></i>


    <i class="bi bi-person" onClick={showInfo}></i>


    <i class="bi bi-gear"></i>
    <i class="bi bi-envelope-exclamation"></i>
    <i class="bi bi-file-earmark-text"></i>

    <Skills isVisible={skillsVisible} 
    hideSkills = {hideSkills}
    />
    <Info isVisible={infoVisible}
    hideInfo = {hideInfo}
    />
    

    <style jsx> {`
    #skills-container{
        display: ${skillsVisible ? 'block' : 'none'};
    }


    #info-container{
      display: ${infoVisible ? 'block' : 'none'};
    }
    `}
    </style>
    </>
    
  )
}

export default Desktop