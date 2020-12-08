import React from 'react'
import { Section } from 'react-scroll-section'
import { useTranslation } from 'react-i18next'
import './Benefits.scss'

import IcHour from '../../assets/Ic_Hour.svg'
import IcHomeOffice from '../../assets/Ic_HomeOffice.svg'
import IcWorkshops from '../../assets/Ic_Workshops.svg'
import IcDrinkSnacks from '../../assets/Ic_DrinkSnacks.svg'
import IcLaptop from '../../assets/Ic_laptop.svg'
import IcBrain from '../../assets/Ic_brain.svg'

const Benefits = () => {
  const [t] = useTranslation()

  return (
    <Section id="benefits">
      <p className="benefits-title">
        {t('benefits.title')}{' '}
        <span className="color-blue">;)</span>
      </p>
      <div className="benefits-content">
        <div className="benefits-item">
          <img src={IcHour} className="benefits-animation" />
          <div className="benefits-text"> {t('benefits.benefit1')}</div>
        </div>
        <div className="benefits-item">
          <img src={IcHomeOffice} className="benefits-animation" />
          <div className="benefits-text">{t('benefits.benefit2')}</div>
        </div>
        <div className="benefits-item">
          <img src={IcWorkshops} className="benefits-animation" />
          <div className="benefits-text">{t('benefits.benefit3')}</div>
        </div>
        <div className="benefits-item">
          <img src={IcDrinkSnacks} className="benefits-animation" />
          <div className="benefits-text">{t('benefits.benefit4')}</div>
        </div>
        <div className="benefits-item">
          <img src={IcLaptop} className="benefits-animation" />
          <div className="benefits-text">{t('benefits.benefit5')}</div>
        </div>
        <div className="benefits-item">
          <img src={IcBrain} className="benefits-animation" />
          <div className="benefits-text">{t('benefits.benefit6')}</div>
        </div>
      </div>
      <div className="line"></div>
    </Section>
  )
}

export default Benefits
