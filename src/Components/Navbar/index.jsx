import React from 'react';
import PropTypes from 'prop-types';
import './navbar-style.css';

function Navbar({ actions }) {
  const mappedElements = actions.map((element, index) =>
    <div key={index} className={element.isActive} onClick={element.onClick}>
      {element.text}
    </div>
  );

  return (
      <div className={"input-navbar-title"}>
        {mappedElements}
      </div>
  )
}

Navbar.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func,
      disabled: PropTypes.bool,
      type: PropTypes.string,
      icon: PropTypes.string,
      text: PropTypes.string
    })
  ),
};

Navbar.defaultProps = {
  actions: [],
};

export default Navbar;