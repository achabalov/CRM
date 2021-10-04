import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Auth } from "../App";
import { useInput } from "../hooks/hooks";

export default function Login() {
  
  const setAuth = useContext(Auth);
  
  const email = useInput('', {isEmpty: true, email: 'email'})
  const password = useInput('', {isEmpty: true, minLength: 5})

  const submitHandler = (e) => {
    e.preventDefault();
  }
  console.log(email.valueError);
  return (
    <form className="card auth-card" onSubmit={(e) => submitHandler(e)}>
      <div className="card-content">
        <span className="card-title">Домашняя бухгалтерия</span>
        <div className="input-field">
          <input value={email.value} onChange={email.onChange} onBlur={email.onBlur} id="email" type="text" className="validate" />
          <label htmlFor="email">Email</label>
          <small className="helper-text invalid">{(email.isDirty && email.isEmpty)? 'Поле не может быть пустым' : 'email'}</small>
        </div>
        <div className="input-field">
          <input value={password.value} onChange={password.onChange} onBlur={password.onBlur} id="password" type="password" className="validate" />
          <label htmlFor="password">Пароль</label>
          <small className="helper-text invalid"></small>
        </div>
      </div>
      <div className="card-action">
        <div>
          <button
            className="btn waves-effect waves-light auth-submit"
            type="submit"
            onClick={(e)=> {
              e.preventDefault();
              // setAuth(prev => !prev)
            }}
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
