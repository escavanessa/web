import React from 'react'
import './Desktop.css'
import { MediaCd } from '@react95/icons'
import { Mail } from '@react95/icons'
import { RecycleFull } from '@react95/icons'
import { Wmsui323919 } from '@react95/icons'
import { Bookmark } from '@react95/icons'
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
    <div id='desktop-container' className='desktop-container'>
      <div className='desktop-icon'>
      <Mail variant="32x32_4" />
      <p>test</p>
      </div>

      <div className='desktop-icon'>
      <MediaCd variant="32x32_4"/>
      <p>test</p>
      </div>

      <div className='desktop-icon'>
      <RecycleFull variant="32x32_4"/>
      <p>test</p>
      </div>

      <div className='desktop-icon'>
      <Wmsui323919 variant="32x32_4"  onClick={showSkills}/> 
      <p>test</p>
      </div>

      <div className='desktop-icon'>
      <Bookmark variant="32x32_4" onClick={showInfo} />
      <p>test</p>
      </div>

          <Skills isVisible={skillsVisible} 
    hideSkills = {hideSkills}
    />
    <Info isVisible={infoVisible}
    hideInfo = {hideInfo}
    />

    </div>


    {/* <Skills isVisible={skillsVisible} 
    hideSkills = {hideSkills}
    />
    <Info isVisible={infoVisible}
    hideInfo = {hideInfo}
    /> */}
    

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