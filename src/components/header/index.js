import React from 'react'
import logo from '../../logo.svg'
import '../../App.css'

export const Header = () => {
  return (
    <div>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Welcome to ARG-Panel</h2>
      </div>
    </div>
  )
}
