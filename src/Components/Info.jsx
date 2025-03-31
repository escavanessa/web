import React from 'react'
import './Info.css'
import "bootstrap-icons/font/bootstrap-icons.css";

function Info() {
  return (
    <>
    <div id='info-container'>

      <div id='info-title'>
        <i id='info-exit' class="bi bi-x-square"></i>
        info.exe
      </div>
      <div id='info-context'>
         click the icons for more information!
      </div>
      <div id='info-inner'>
          <i id='info-icon' class="bi bi-easel2"></i>
          <i id='info-icon' class="bi bi-journal"></i>
          <i id='info-icon' class="bi bi-bandaid"></i>
          <i id='info-icon' class="bi bi-code-square"></i>

      </div>
    </div>
    
    </>
  )
}


//        click the icons for more information!
//<i class="bi bi-easel2"></i>
//<i class="bi bi-journal"></i>
//<i class="bi bi-bandaid"></i>
//<i class="bi bi-code-square"></i>

export default Info