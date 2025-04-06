import React from 'react'
import './Info.css'
import "bootstrap-icons/font/bootstrap-icons.css";


function Info(props) {
  return (
    <>
    <div id='info-container'>

      <div id='info-title'>
        <p className='info-title'>Info.exe</p>
        <button id='info-exitbutton' onClick={props.hideInfo}>X</button>
      </div>
      <div id='info-body'>
        <p>Click the icons for more information!</p>
          <i id='info-icon' class="bi bi-easel2"></i>
          <i id='info-icon' class="bi bi-journal"></i>
          <i id='info-icon' class="bi bi-bandaid"></i>
          <i id='info-icon' class="bi bi-code-square"></i>
      </div>
    </div>
    
    </>
  )
}



export default Info