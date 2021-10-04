import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Auth } from "../App";
import { useInput } from "../hooks/hooks";

export default function Login() {
  
  const setAuth = useContext(Auth);
  
  const email = useInput('', {isEmpty: true, email: 'email'})
  const password = useInput('', {isEmpty: true, length: {min: 5, max: 15}})

  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <form className="card auth-card" onSubmit={(e) => submitHandler(e)}>
      <div className="card-content">
        <span className="card-title">Домашняя бухгалтерия</span>
        <div className="input-field">
          <input value={email.value} onChange={email.onChange} onBlur={email.onBlur} id="email" type="text" className="validate" />
          <label htmlFor="email">Email</label>
          <small className="helper-text invalid">{(email.isDirty && email.isEmpty) ? 
          'Поле не может быть пустым ' : (email.isDirty && email.error) ? 'Введён не корректный email' : 'email'}
          </small>
        </div>
        <div className="input-field">
          <input value={password.value} onChange={password.onChange} onBlur={password.onBlur} id="password" type="password" className="validate" />
          <label htmlFor="password">Пароль</label>
          <small className="helper-text invalid">{(password.isDirty && password.isEmpty) ? 'Поле не может быть пустым' :
          (password.lengthError && password.isDirty) ? 'Пароль не соответствует длине' : 'password'}</small>
        </div>
      </div>
      <div className="card-action">
        <div>
          <button
            className="btn waves-effect waves-light auth-submit"
            type="submit"
            onClick={(e)=> {
              e.preventDefault();
              setAuth(prev => !prev)
            }}
            disabled={email.error || password.lengthError}
          >
            Войти
            <i className="material-icons right">send</i>
          </button>
        </div>

        <p className="center">
          Нет аккаунта?
          <NavLink to="/registration">Зарегистрироваться</NavLink>
        </p>
      </div>
    </form>
  );
}
