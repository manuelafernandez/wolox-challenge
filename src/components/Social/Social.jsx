import React from 'react'
import twitter from './../../assets/twitter.png'
import './Social.scss'

const Social = () => {
  return (
    <section id="social">
      <div className="woloxer">
        <div className="content-text-woloxers">
          <div className="text-woloxers fade-in-hello">
            <div>
              <span className="extra-bold color-green font-lg">350 + </span>
              <span className="extra-bold color-blue font-lg">Woloxers</span>
            </div>
            <div className="color-white link-tw">
              <img src={twitter} className="twitter" />
              @Wolox
            </div>
            <div className="hover-btn">
              <a href="https://twitter.com/Wolox" target="blank" className="button-social">
                Siguenos
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content-text bold fade-in-hello">
        <div className="font-md">
          Trabajamos para
          <br />
          <span className="extra-bold color-blue">convertir </span>
          <span className="extra-bold color-green">ideas</span> en <br />
          productos.
        </div>
      </div>
    </section>
  )
}

export default Social
