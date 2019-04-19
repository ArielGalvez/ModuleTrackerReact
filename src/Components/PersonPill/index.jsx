import React from 'react';
import Avatar from '../Avatar';
import './PersonPill.css';
import PropTypes from 'prop-types';

function PersonPill({ id, src, name, onChange, active }) {

  let stylePersonPill = {
    width: '260px',
    heigth: '80px',
    borderRadius: '50px'
  };
  const onPersonClick = () => {
    onChange(id);
  }

  const classPill = active ? 'selected' : '';
  return (
    <div className={`${classPill} person-pill`} style={stylePersonPill} onClick={onPersonClick}>
      <Avatar src={src} name={name} size={stylePersonPill.heigth} />
      <div className="content-pill">
        <h3>{name}</h3>
        {/* <p>{}</p> */}
      </div>
    </div>
  );
}

PersonPill.defaultProps = {
  active: false
}

PersonPill.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  src: PropTypes.string,
  onChange: PropTypes.func,
  active: PropTypes.bool
}

export default PersonPill;