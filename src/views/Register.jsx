import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    watch
  } = useForm({mode: 'onChange'});

  const email = watch('email')
  const password = watch('password');
  console.log(email, password);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        className="card auth-card"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="card-content">
          <span className="card-title">Домашняя бухгалтерия</span>
          <div className="input-field">
            <input
              {...register("email", {
                required: true,
                maxLength: 20,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              id="email"
              type="text"
            />
            <label htmlFor="email">Email</label>
            <small className="helper-text invalid">
              {errors?.email?.type === 'required' && "Email не должен быть пустым"}
              {errors?.email?.type === 'pattern' && "Введите корректный email"}
              {errors?.email?.type === 'maxLength' && "Слишком длинный email"}
              {errors?.email?.type === undefined && 'Email'}
              </small>
          </div>
          <div className="input-field">
            <input 
            {...register('password', 
            {required: true,
             minLength: 6, 
             maxLength: 15})} id="password" type="password" className="validate" />
            <label htmlFor="password">Пароль</label>
            <small className="helper-text invalid">
              {(errors?.password?.type === 'minLength' ||
              errors?.password?.type === 'maxLength') &&
               'Пароль не сооветствует длине'}
               {errors?.password?.type === 'required' && "Поле не может быть пустым"}
               {errors?.password?.type === undefined && 'password'}
               </small>
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
              disabled={!isDirty || !isValid}
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
