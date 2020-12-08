import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { PROVINCES } from '../../utils/constants'
import { loginUser } from '../../redux/actions/login'
import './Login.scss'

const Login = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, watch, trigger, errors, formState } = useForm({ mode: 'all' })

  const [provinces, setProvince] = useState([])

  const changeCountry = (event) => {
    setProvince(PROVINCES[event.target.value].provinces)
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

  const onSubmit = (data) => {
    delete data.pwd_repeat
    delete data.terms
    dispatch(loginUser(data))
    window.location.href = '/list'
  }

  return (
    <div id="login">
      <div className="content-login">
        <h1>Registro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="content-input">
            <div className="content-text">
              <div className="text">
                <label>Nombre</label>
                <input
                  name="name"
                  maxLength="30"
                  ref={register({ required: true })}
                />
                {handleValidation(errors.name)}
              </div>
            </div>
            <div className="content-text">
              <div className="text">
                <label>Apellido</label>
                <input
                  name="last_name"
                  maxLength="30"
                  ref={register({ required: true })}
                />
                {handleValidation(errors.last_name)}
              </div>
            </div>
          </div>

          <div className="content-input">
            <div className="content-text">
              <div className="text">
                <label>País</label>
                <select
                  name="country"
                  ref={register({ required: true })}
                  onChange={changeCountry}
                >
                  <option value=""></option>
                  <option key='ar' value='ar'>Argentina</option>
                  <option key='ch' value='ch'>Chile</option>
                  <option key='co' value='co'>Colombia</option>
                  <option key='me' value='me'>México</option>
                  <option key='pe' value='pe'>Perú</option>
                </select>
                {handleValidation(errors.country)}
              </div>
            </div>
            <div className="content-text">
              <div className="text">
                <label>Provincia/Departamento</label>
                <select name="province" ref={register({ required: true })}>
                  <option value=""></option>
                  {provinces.map((province) => (
                    <option key={province.id} value={province.id}>
                      {province.province}
                    </option>
                  ))}
                </select>
                {handleValidation(errors.province)}
              </div>
            </div>
          </div>

          <div className="content-input">
            <div className="content-text">
              <div className="text">
                <label>Email</label>
                <input
                  name="mail"
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Formato de correo inválido'
                    }
                  })}
                  required
                />
                {handleValidation(errors.mail)}
              </div>
            </div>
            <div className="content-text">
              <div className="text">
                <label>Teléfono</label>
                <input
                  name="phone"
                  type="number"
                  maxLength="10"
                  ref={register({ required: true })}
                />
                <span>{errors.phone?.message}</span>
              </div>
            </div>
          </div>
          <div className="content-input">
            <div className="content-text">
              <div className="text">
                <label>Contraseña</label>
                <input
                  name="password"
                  type="password"
                  onChange={() => { trigger('password_repeat') }}
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z0-9]+$/,
                      message: 'La contraseña debe ser alfanumérica'
                    },
                    minLength: {
                      value: 6
                    }
                  })}
                />
                {handleValidation(errors.password)}
              </div>
            </div>
            <div className="content-text">
              <div className="text">
                <label>Repetir contraseña</label>
                <input
                  name="pwd_repeat"
                  type="password"
                  ref={register({
                    required: true,
                    validate: (value) => value === watch('password')
                  })}
                />
                {handleValidation(errors.pwd_repeat)}
              </div>
            </div>
          </div>

          <div className="content-total">
            <label>
              <input
                name="terms"
                type="checkbox"
                ref={register({ required: true })}
              />
                Acepto los{' '}
              <a href="/policies" target="_blank">
                Términos y condiciones
            </a>
            </label>
            <div>{handleValidation(errors.terms)}</div>
          </div>

          <div className="button-login-css">
            <input
              type="submit"
              value="Registrarse"
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
