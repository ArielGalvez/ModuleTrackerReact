import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import './style-toolbar.css';

function ToolBar({ srcLogoImage, srcAvatar, nameAvatar, sizeAvatar }) {

  return (
    <section className="toolbar-component">

      <div className="logo-section">
        <img className="logo" src={srcLogoImage} />
      </div>

      <div className="user-section">
        <p className="username"> {nameAvatar} </p>
        <Avatar className="avatar" src={srcAvatar} name={nameAvatar} size={sizeAvatar} />
      </div>

    </section>
  )
}

ToolBar.propTypes = {
  srcLogoImage: PropTypes.string,
  srcAvatar: PropTypes.string,
  nameAvatar: PropTypes.string,
  sizeAvatar: PropTypes.string
};

ToolBar.defaultProps = {
  srcLogoImage: '',
  srcAvatar: '',
  nameAvatar: '',
  sizeAvatar: ''
};

export default ToolBar;