import React from 'react';
import './style-avatar.css';
import PropTypes from 'prop-types';

function Avatar({ src, name, size }) {

  const getInitials = userName => {
    const initials = userName.split(' ');
    const firstName = initials[0][0];
    const lastName = initials[1][0];
    return firstName + ' ' + lastName;
  };

  const styleSize = {
    width: size,
    height: size,
    borderRadius: '50%'
  };

  const fakeImg = <div className="circle" style={styleSize} ><label>{getInitials(name)}</label></div>
  const img = <img src={src} alt={name} style={styleSize} />
  let content = src ? img : fakeImg;
  return (
    <div className="avatar">
      {content}
    </div>
  );
}

Avatar.defaultProps = {
  src: '',
  name: '',
  size: '200px'
}

Avatar.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string
}

export default Avatar;