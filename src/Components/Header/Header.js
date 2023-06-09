import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="app-header">
      <Link to='/' className="link-style">
      <h1 className="app-title">Welcome to 
       Bark Browser!
      </h1>
      </Link>
    </header>
  )
}

export default Header