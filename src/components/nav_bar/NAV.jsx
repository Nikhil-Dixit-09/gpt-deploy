import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './nav.css'
import Logo from '../../assets/icons8-artificial-intelligence-50.png'
const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is gpt3</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)
const NAV = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
      <div className='navbar_links'>
        <div className='navbar_logo'>
          {/* <img src="" alt="" /> */}
          <img src={Logo} alt="" />
        </div>
        <div className='link_container'>
          <Menu />
        </div>

        
      </div>
      <div className='signin'>
          <p>Sign In</p>
          <button type='button'>Sign Up</button>
        </div>
        <div className='menu'>
          {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> :
            <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }
          {
            toggleMenu && (
              <div className='navbar_mob scale-up-center'>
                <div className='navbar_mob_link'>
                  <Menu />
                  <div className='signin_mob'>
                    <p>Sign In</p>
                    <p><button type='button'>Sign Up</button></p>

                  </div>
                </div>
              </div>
            )
          }
        </div>
    </div>
  )
}
export default NAV;
