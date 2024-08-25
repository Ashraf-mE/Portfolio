import React from 'react'
import './footer.css'

const Footer = ({isLightMode}) => {
  return (
    <footer className={isLightMode?'footer-lm':'footer'}>
        Copyright &#169; 2024 Mohammad Ashraf. All rights reserved.
    </footer>
  )
}

export default Footer
