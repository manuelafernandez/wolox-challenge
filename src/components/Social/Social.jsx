import React from 'react'
import { useTranslation } from 'react-i18next'

import twitter from './../../assets/twitter.png'
import './Social.scss'

const Social = () => {
  const [t] = useTranslation()

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
                {t('social.buttonFollow')}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content-text bold fade-in-hello">
        <div className="font-md">
          {t('social.title1')}
          <br />
          <span className="extra-bold color-blue">  {t('social.title2')} </span>
          <span className="extra-bold color-green">  {t('social.title3')}</span>   {t('social.title4')} <br />
          {t('social.title5')}
        </div>
      </div>
    </section>
  )
}

export default Social
