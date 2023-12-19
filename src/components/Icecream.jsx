import React from 'react'

const Icecream = (scoops) => {
  return (
    <div className='icecream'>
        <p className='cone'></p>
        <div className="scoop chocolate"></div>
        <div className="scoop vanilla"></div>
        <div className="scoop orange"></div>
        <div className="scoop strawberry"></div>
        <div className="scoop chocolate"></div>
        <div className="scoop vanilla react" id='scoop'></div>
        <div className="scoop lemon"></div>
        
        <div className="cherry"></div>
    </div>
  )
}

export default Icecream