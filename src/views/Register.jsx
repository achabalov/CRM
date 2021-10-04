import React, { useEffect, useState } from "react";

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dirtyEmail, setDirtyEmail] = useState(false);
  const [dirtyPassword, setDirtyPassword] = useState(false)
  const [emailError, setEmailError] = useState('Email не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
  const [valid, setValid] = useState(false);

  useEffect(()=> {
    if(emailError || passwordError) {
      setValid(false)
    } else {
      setValid(true)
    }
  }, [emailError, passwordError])

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email');
    } else {
      setEmailError('')
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if(e.target.value.length < 5 || e.target.value.length > 16) {
      setPasswordError('Пароль не может быть меньше 6 и больше 15')
      if(!e.target.value) {
        setPasswordError('Пароль не может быть пустым');
        }
    } else {
      setPasswordError('')
    }
  }

  const blurHandler = (e) => {
    switch(e.target.id) {
      case 'email': {
        setDirtyEmail(true);
        break;
      }
      case 'password': {
        setDirtyPassword(true)
        break;
      }
      default: return
  }
}

return (
    <div>
      <form className="card auth-card">
        <div className="card-content">
          <span className="card-title">Домашняя бухгалтерия</span>
          <div className="input-field">
            <input value={email} onChange={e => emailHandler(e)} onBlur={blurHandler} id="email" type="text" />
            <label htmlFor="email">Email</label>
            <small className="helper-text invalid">{dirtyEmail ? emailError : 'Email'}</small>
          </div>
          <div className="input-field">
            <input value={password} onChange={e=> passwordHandler(e)} onBlur={blurHandler}  id="password" type="password" className="validate" />
            <label htmlFor="password">Пароль</label>
            <small className="helper-text invalid">{dirtyPassword ? passwordError : 'Password'}</small>
          </div>
          <div className="input-field">
            <input id="name" type="text" className="validate" />
            <label htmlFor="name">Имя</label>
            <small className="helper-text invalid">Name</small>
          </div>
          <p>
            <label>
              <input type="checkbox" />
              <span>С правилами согласен</span>
            </label>
          </p>
        </div>
        <div className="card-action">
          <div>
            <button
              className="btn waves-effect waves-light auth-submit"
              type="submit"
              disabled={!valid}
            >
              Зарегистрироваться
              <i className="material-icons right">send</i>
            </button>
          </div>

          <p className="center">
            Уже есть аккаунт?
            <a href="/">Войти!</a>
          </p>
        </div>
      </form>
    </div>
  );
}
