import React from 'react'
import './header.css'
import people from '../../assets/icons8-myspace-48.png';
import ai from '../../assets/ai.png';
const header = () => {
  return (
    <div className='header section_padding' id='home'>
      <div className='content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed delectus reprehenderit libero, at id amet totam aspernatur perferendis, animi iusto. Nulla totam possimus corrupti similique commodi, quisquam earum odit.
        </p>
        <div className='input'>
          <input type="email" placeholder='Your email address' />
          <button type="button">Get Started</button>
        </div>
        <div className="people">
          <img src={people} alt="hi" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        </div>
        <div className="header-image">
          <img src={ai} alt="hi" />
        </div>
      
    </div>
  )
}

export default header
