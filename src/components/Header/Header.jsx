import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { useScrollSection } from 'react-scroll-section'
import WoloxHeader from './../../assets/logo_full_color.svg'
import './Header.scss'

const Header = () => {
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

  const logoutOption = auth.login ? <a onClick={logout}>Salir</a> : ''

  return (
    <div className={'content-header'}>
      <div className="content-logo">
        <img src={WoloxHeader} alt="WoloxLogo" className="logo logo-animation"/>
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
            Inicio
          </a>
          <a
            selected={benefits.selected}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              benefits.onClick()
            }}
          >
            Beneficios
          </a>
          {logoutOption}
          {auth.login === false && (
            <div className="btn-login-css">
              <a href="/Register" className="button-login">
                Login
              </a>
            </div>
          )}
          {auth.login && (
            <div className="btn-login-css">
              <a href="/List" className="button-login">
                Tecnologías
              </a>
            </div>
          )}
        </div>
      )}

      {location.pathname !== '/' && (
        <div className="content-actions">
          {logoutOption}
          <div className="btn-login-css">
            <a href="/" className="button-login">
              Volver
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
