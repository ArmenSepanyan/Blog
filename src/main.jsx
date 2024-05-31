import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header/Header'
import Slides from './Slides/Slides'
import List from './List/List'
import User from './User/User'

const jsxElements = (
  <div className='body'>
    <Header/>
    <Slides/>
    <div className='footer'>
    <List/>
    <User/>
    </div>
    
  </div>
)
ReactDOM.createRoot(document.getElementById('root')).render(jsxElements)
