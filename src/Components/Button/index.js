import React from 'react';
import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';
import './style-button.css';

const Button = ({ onClick, disabled, type, icon, text }) => {
  let classNameButton = "button";
  /* const onClickButton = () => {
    onClick();
  } */
  if (type) {
    classNameButton = classNameButton + " " + type;
  }

  return (
    <button className={classNameButton} disabled={disabled} onClick={onClick}>
      <MaterialIcon icon={icon} />
      <div>{text}</div>
    </button>
  )
};

Button.defaultProps = {
  onClick: () => { },
  disabled: false,
  type: '',
  icon: '',
  text: '',
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
}

export default Button;