import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

function Message({ text, type, visible }) {
    return (
        <div className={`Message type-${type} message-${visible?'visible': ''}`}>
            <p>{text}</p>
        </div>
    );
}

Message.defaultProps = {
    type: 'success',// success, fail, warning
    visible: true
}

Message.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    visible: PropTypes.bool
}

export default Message;
