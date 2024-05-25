import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header/Header'
import Slides from './Slides/Slides'
import List from './List/List'

const jsxElements = (
  <div>
    <Header/>
    <Slides/>
    <List/>
  </div>
)
ReactDOM.createRoot(document.getElementById('root')).render(jsxElements)
