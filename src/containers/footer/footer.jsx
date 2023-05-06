import React from 'react'
import './footer.css'
import facebook from '../../assets/icons8-facebook-48.png';
import linkedin from '../../assets/icons8-linkedin-circled-48.png';
import twitter from '../../assets/icons8-twitter-48.png';
import copyright from '../../assets/icons8-copyright-52.png';
const footer = () => {
  return (
    <div className='footer section_padding'>
      <div className='icons'>
        <div className='facebook'>
          <img src={facebook} alt="" />
        </div>
        <div>
          <img src={linkedin} alt="" />
        </div>
        <div>
          <img src={twitter} alt="" />
        </div>
      </div>
      <div className='text'>
        Info &nbsp; . &nbsp; Support &nbsp; . &nbsp; Marketing
      </div>
      <div className='copyright'>
        <div className='copyright_icon'>
          <img src={copyright} alt="" />
        </div>
        <div>
          Chat GPT Open AI
        </div>
      </div>
    </div>
  )
}

export default footer
