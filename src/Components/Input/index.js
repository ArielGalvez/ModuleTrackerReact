import React from 'react';
import PropTypes from 'prop-types';
import './input-style.css';
import Validator from '../../Components/Validator';

function Input({ onChange, onBlur, label, placeholder, errormessage, autofocus, value, type, objectKey }) {

  const handleOnChange = event => {
    onChange(objectKey, event.target.value);
  };

  const handleOnChanges = event => {
    var result='';
    console.log(objectKey)
    switch (objectKey) {
      case 'name' || 'Paternal Last name' || 'Maternal Last Name':
        result = Validator().validateName(value);
        break;
      case 'Paternal Last name':
        result = Validator().validateName(value);
        break;
      case 'Maternal Last Name':
        result = Validator().validateName(value);
        break;
      case 'CI':
        result = Validator().validateCi(value);
        break;
      case 'Email':
        result = Validator().validateEmail(value);
        break;
      case 'Phone':
        result = Validator().validateTelf(value);
        break;
      default:
        break;
    }

    errormessage = !result.isValid ? result.error : '';
    onBlur(objectKey, errormessage);
  };

  return (
    <div className="form-field form-field-invalid">
        <input id="field-text" type={type} requiere value={value} onChange={handleOnChange} onBlur={handleOnChanges} autoFocus={autofocus} placeholder={placeholder}></input>
        <label className="form-field-label" htmlFor="field-text">{label}</label>
        <label className="form-field-label-error">{errormessage}</label>
    </div>
  )
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  errormessage: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

Input.defaultProps = {
  value: '',
  onChange: function () { },
  autoFocus: false,
  errormessage: '',
  label: '',
  placeholder: '',
  type: ''
};

export default Input;