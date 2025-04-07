import React from 'react'
import './Info.css'
import { Earth } from '@react95/icons';
import { Frame } from '@react95/core';


function Info(props) {
  return (
    <>
    <Frame id='info-container' w="200px" h="100px" bgColor="$material" boxShadow="$out" padding="$4">
      <div id='info-title'>
        <p className='info-title'>Info.exe</p>
        <button id='info-exitbutton' onClick={props.hideInfo}>X</button>
      </div>
      <div id='info-body'>
        <Earth variant="32x32_4"/>
        <p>Click the icons for more information!</p>
      </div>
    </Frame>
    
    </>
  )
}



export default Info