import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

const Footer = () => {

  return (
      <Link to='/saved'>
      <footer className="app-footer">
        <h1>Saved Dogs</h1>
      </footer>
      </Link>
  )
}

export default Footer