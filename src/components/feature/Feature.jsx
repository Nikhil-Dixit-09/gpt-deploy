import React from 'react';
import './feature.css'
const Feautre = ({title,text}) => {
  return (
    <div className='feature_container'>
        <div className='title'>
          <div className='line'>

          </div>
          <h1>{title}</h1>
        </div>
        <div className='text'>
          {text}
        </div>
    </div>
  )
}

export default Feautre;