import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import {
  COUNTRIES,
  PROVINCES
} from '../../utils/constants'
import { loginUser, setCountrySelected } from '../../redux/actions/login'
import './Login.scss'

const Login = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, watch, setValue, trigger, errors, formState } = useForm({ mode: 'all' })

  const countrySelect = useSelector((store) => store.login.countrySelected)
  const provinces = (typeof PROVINCES[countrySelect] !== 'undefined') ? PROVINCES[countrySelect].provinces : []

  const onSubmit = (data) => {
    delete data.pwd_repeat
    dispatch(loginUser(data))
    window.location.href = '/List'
  }

  const handleValidation = (object) => {
    if (object?.type === 'required') {
      return <span>Campo requerido</span>
    }
    if (object?.type === 'pattern') {
      return <span>{object.message}</span>
    }
    if (object?.type === 'minLength') {
      return <span>Mínimo 6 caracteres</span>
    }
    if (object?.type === 'validate') {
      return <span>No coinciden las contraseñas</span>
    }
  }

  const getProvince = () => {
    setValue('province', '', true)
    dispatch(setCountrySelected(watch('country')))
  }

  return (
    <div id="login">
      <div className="contentForm">
        <h1>Registrarme</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="content-input">
            <label>Nombre</label>
            <input
              name="name"
              maxLength="30"
              ref={register({ required: true })}
              required
            />
            {handleValidation(errors.name)}
          </div>

          <div className="content-input">
            <label>Apellido</label>
            <input
              name="surname"
              maxLength="30"
              ref={register({ required: true })}
              required
            />
            {handleValidation(errors.surname)}
          </div>

          <div className="content-input">
            <label>Pais</label>
            <select
              name="country"
              ref={register({ required: true })}
              onChange={getProvince}
            >
              <option value=""></option>
              {COUNTRIES.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.country}
                </option>
              ))}
            </select>
            {handleValidation(errors.country)}
          </div>

          <div className="content-input">
            <label>Provincia/Departamento</label>
            <select name="province" ref={register({ required: true })}>
              <option value=""></option>
              {provinces.map((province, index) => (
                <option key={index} value={province.id}>
                  {province.province}
                </option>
              ))}
            </select>
            {handleValidation(errors.province)}
          </div>

          <div className="content-input">
            <label>Email</label>
            <input
              name="email"
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Formato de correo inválido'
                }
              })}
              required
            />
            {handleValidation(errors.email)}
          </div>

          <div className="content-input">
            <label>Teléfono</label>
            <input
              name="phone"
              type="number"
              maxLength="10"
              ref={register({ required: true })}
              required
            />
            <span>{errors.phone?.message}</span>
          </div>

          <div className="content-input">
            <label>Contraseña</label>
            <input
              name="password"
              type="password"
              onChange={() => { trigger('password_repeat') }}
              ref={register({
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: 'La contraseña debe tener números o letras'
                },
                minLength: {
                  value: 6
                }
              })}
              required
            />
            {handleValidation(errors.password)}
          </div>

          <div className="content-input">
            <label>Repetir contraseña</label>
            <input
              name="pwd_repeat"
              type="password"
              ref={register({
                required: true,
                validate: (value) => value === watch('password')
              })}
              required
            />
            {handleValidation(errors.pwd_repeat)}
          </div>

          <div className="content-input">
            <label className="inline">
              <input
                name="terms"
                type="checkbox"
                ref={register({ required: true })}
              />
              Acepto los{' '}
              <a href="/policies" target="_blank">
                Terminos y condiciones
              </a>
            </label>
            <div>{handleValidation(errors.terms)}</div>
          </div>

          <div className="button-login-css">
            <input
              type="submit"
              value="Registrarme"
              className="button-login"
              disabled={!formState.isValid}
            />
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login
