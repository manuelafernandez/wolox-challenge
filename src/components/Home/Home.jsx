import React from 'react'
import { Section } from 'react-scroll-section'
import { useTranslation } from 'react-i18next'

import hero from './../../assets/Hero/Ic_ilustra_Hero@3x.png'
import './Home.scss'

const Home = () => {
  const [t] = useTranslation()

  return (
    <Section id="home">
      <div className="content-home font-md">
        <div className="fade-in-hello">
          {t('home.title1')}
          <br />
          <span className="bold">{t('home.title2')}</span> {t('home.title3')}
          <br />
          <span className="extra-bold color-green">{t('home.title4')}</span>
        </div>
      </div>
      <div className="content-img">
        <img src={hero} className="logo fade-in-hello" />
      </div>
    </Section>
  )
}

export default Home
