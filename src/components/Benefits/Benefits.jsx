import React from 'react'
import { Section } from 'react-scroll-section'
import './Benefits.scss'

import IcHour from '../../assets/Ic_Hour.svg'
import IcHomeOffice from '../../assets/Ic_HomeOffice.svg'
import IcWorkshops from '../../assets/Ic_Workshops.svg'
import IcDrinkSnacks from '../../assets/Ic_DrinkSnacks.svg'
import IcLaptop from '../../assets/Ic_laptop.svg'
import IcBrain from '../../assets/Ic_brain.svg'

const Benefits = () => {
  return (
    <Section id="benefits">
      <p className="benefits-title">
        Entre los beneficios que ofrecemos se encuentran{' '}
        <span className="color-blue">;)</span>
      </p>
      <div className="benefits-content">
        <div className="benefits-item">
          <img src={IcHour} className="benefits-animation" />
          <div className="benefits-text">Flexibilidad Horaria</div>
        </div>
        <div className="benefits-item">
          <img src={IcHomeOffice} className="benefits-animation" />
          <div className="benefits-text">Home Office</div>
        </div>
        <div className="benefits-item">
          <img src={IcWorkshops} className="benefits-animation" />
          <div className="benefits-text">Capacitaciones y workshops</div>
        </div>
        <div className="benefits-item">
          <img src={IcDrinkSnacks} className="benefits-animation" />
          <div className="benefits-text">Snacks, frutas y bebidas gratis</div>
        </div>
        <div className="benefits-item">
          <img src={IcLaptop} className="benefits-animation" />
          <div className="benefits-text">Semana Remota</div>
        </div>
        <div className="benefits-item">
          <img src={IcBrain} className="benefits-animation" />
          <div className="benefits-text">Trabajar en últimas tecnologías</div>
        </div>
      </div>
      <div className="line"></div>
    </Section>
  )
}

export default Benefits
