import React from 'react'
import Card from './Card'
import { useState } from 'react';

function Toggle() {

    const [cardVisible, setcardVisible] = useState(false);


    const toggle = () => {
        setcardVisible(!cardVisible)
    }

  return (
    <>
    <h2>parent component</h2>
    <button onClick={toggle}>toggle</button>
    <Card isVisible={cardVisible}/>


    <style jsx> {`
    #card-container{
        display: ${cardVisible ? 'block' : 'none'};
    }
    `}
    </style>
    </>
  )
}

export default Toggle