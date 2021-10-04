import { useEffect, useState } from "react";

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations)

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setIsDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  };
};

export const useValidation = (value, validations) => {

    const [isEmpty, setIsEmpty] = useState(true);
    const [lengthError, setLengthError] = useState(false);
    const [error, setError] = useState(`Поле не может быть пустым`)
    
    useEffect(()=> {
        for (const validation in validations) {
            switch(validation) {
                case 'email': 
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(!re.test(String(value).toLowerCase())) {
                    setError('Некорректный email');
                } else {
                    setError('')
                }
                    break;
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
                case 'length':
                    value.length < validations[validation].min || value.length > validations[validation].max ? setLengthError(true) : setLengthError(false);
                    break;
                default: return;
            }
        }
    }, [value])

    return {
        isEmpty,
        lengthError,
        error
    }
}