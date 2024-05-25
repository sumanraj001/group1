import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomeComponent from './components/pages/HomeComponent'
import AboutComponent from './components/pages/AboutComponent'
import ContactComponent from './components/pages/ContactComponent'
import Pagenotfound from './components/pages/Pagenotfound'
import NewsComponents from './components/pages/NewsComponents'

function Routercomponents() {
  return (
    <div>
        <Routes>
            <Route path='/'  element={ < HomeComponent />} />
            <Route path='/about'  element={ < AboutComponent />} />
            <Route path='/contact'  element={ < ContactComponent />} />
            <Route path='/news'  element={ < NewsComponents/>} />
            <Route path='/*'  element={ < Pagenotfound/>} />
            
        </Routes>
    </div>
  )
}

export default Routercomponents