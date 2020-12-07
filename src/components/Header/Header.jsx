import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { useScrollSection } from 'react-scroll-section'
import WoloxHeader from './../../assets/logo_full_color.svg'
import './Header.scss'

const Header = () => {
  const location = useLocation()
  const auth = useSelector((store) => store.auth)
  const favorite = useSelector((store) => store.list)

  const home = useScrollSection('home')
  const benefits = useScrollSection('benefits')

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('favorites')
    window.location.href = '/'
  }

  const favorites = localStorage.getItem('favorites')
  const total = favorites === null ? 0 : JSON.parse(favorites).length ?? 0
  const totalFav = total > 0 ? (<span className="favorite"> Total favoritos: {total}</span>) : ('')

  const logoutOption = auth.login ? <a onClick={logout}>Logout</a> : ('')

  useEffect(() => {
  }, [favorite])

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
          {totalFav}
          {auth.login
            ? <div className="btn-login-css">
              <a href="/list" className="button-login">
                Tecnologías
            </a>
            </div>
            : <div className="btn-login-css">
              <a href="/login" className="button-login">
                Login
              </a>
            </div>
          }
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
