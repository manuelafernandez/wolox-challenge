import React from 'react'
import WoloxFooter from './../../assets/Ic_Wolox_Footer.svg'
import './Footer.scss'

const Footer = () => {
  return (
    <section id="footer">
      <div className="title-bold font-semibold">
        Gracias por <span className="color-blue">completar el ejercicio</span>
      </div>
      <div className="footer-title">Te invitamos a ver más información</div>
      <div className="btn-content font-bold">
        <a href="https://www.wolox.com.ar/" target="blank" className="footer-button">
          Conocer más
        </a>
      </div>
      <div>
        <img src={WoloxFooter} className="footer-img footer-animation" />
      </div>
    </section>
  )
}

export default Footer
