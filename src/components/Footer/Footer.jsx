import React from 'react'
import { useTranslation } from 'react-i18next'

import WoloxFooter from './../../assets/Ic_Wolox_Footer.svg'
import './Footer.scss'

const Footer = () => {
  const [t] = useTranslation()

  return (
    <section id="footer">
      <div className="title-bold font-semibold">
        {t('footer.title1')} <span className="color-blue"> {t('footer.title2')}</span>
      </div>
      <div className="footer-title">{t('footer.subTitle')}</div>
      <div className="btn-content font-bold">
        <a href="https://www.wolox.com.ar/" target="blank" className="footer-button">
          {t('footer.footerButton')}
        </a>
      </div>
      <div>
        <img src={WoloxFooter} className="footer-img footer-animation" />
      </div>
    </section>
  )
}

export default Footer
