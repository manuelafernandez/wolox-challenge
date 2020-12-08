import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { useScrollSection } from 'react-scroll-section'
import WoloxHeader from './../../assets/logo_full_color.svg'
import { useTranslation } from 'react-i18next'
import spanish from './../../assets/spanish.svg'
import english from './../../assets/english.svg'
import './Header.scss'

const Header = () => {
  const [t, i18n] = useTranslation()

  const actualLanguage = i18n.language
  const toLang = actualLanguage === 'es' ? 'en' : 'es'

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  const location = useLocation()
  const auth = useSelector((store) => store.auth)

  const home = useScrollSection('home')
  const benefits = useScrollSection('benefits')

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('favorites')
    window.location.href = '/'
  }

  const favorites = localStorage.getItem('favorites')
  const total = favorites !== null && JSON.parse(favorites).length > 0 ? (<span className="favorite"> {t('header.fav')} {JSON.parse(favorites).length}</span>) : ('')

  const logoutOption = auth.login ? <a onClick={logout}>{t('header.logout')}</a> : ('')

  return (
    <div className={'content-header'}>
      <div className="content-logo">
        <a href="/" className="button-login">
          <img src={WoloxHeader} alt="WoloxLogo" className="logo logo-animation" />
        </a>
      </div>

      {location.pathname === '/' && (
        <div className="content-actions">
          <a
            selected={home.selected}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              home.onClick()
            }}
          >
            {t('header.home')}
          </a>
          <a
            selected={benefits.selected}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              benefits.onClick()
            }}
          >
            {t('header.benefits')}
          </a>
          {logoutOption}
          {total}
          {auth.login
            ? <div className="btn-login-css">
              <a href="/list" className="button-login">
              {t('header.tech')}
            </a>
            </div>
            : <div className="btn-login-css">
              <a href="/login" className="button-login">
              {t('header.login')}
              </a>
            </div>
          }
          <a
            onClick={() => handleChangeLanguage(toLang)}
          >
            <img
              className="languageFlag"
              src={(toLang === 'es' ? spanish : english)}
            />
          </a>
        </div>
      )}

      {location.pathname !== '/' && (
        <div className="content-actions">
          {logoutOption}
        </div>
      )}
    </div>
  )
}

export default Header
