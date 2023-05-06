import React from 'react'
import './App.css'
import './index.css'
import { Nav } from './components'
import {Chatgpt,Footer,Header} from './containers'
function App() {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Nav />
        <Header />
      </div>
      <Chatgpt />
      <Footer />
    </div>
  )
}

export default App
