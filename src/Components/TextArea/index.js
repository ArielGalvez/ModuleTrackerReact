import React from 'react';
import PropTypes from 'prop-types';
import './style-textarea.css';

function TextArea({ visible, onChange, label, placeholder, errormessage, autofocus, value, type, cols, rows, objectKey}) {

    const result = (errormessage) ? errormessage : '';
    
    const onChangeTextArea = (event) => {
        onChange(objectKey, event.target.value);
    }

    return (
        <div className="textarea-component">
            <label className="textarea-label">{label}</label>
            <textarea cols="60" rows="8" className={`text-${visible?'visible': ''}`} type={type} value={value} onChange={onChangeTextArea} autoFocus={autofocus} placeholder={placeholder}></textarea> 
            <label>{result}</label>
        </div>
    )
}

TextArea.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    autoFocus: PropTypes.bool,
    errormessage: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    cols: PropTypes.number,
    rows: PropTypes.number,
};
  
TextArea.defaultProps = {
    value: '',
    onChange: function(){},
    autoFocus: false,
    errormessage: '',
    label: '',
    placeholder: '',
    type: '',
    cols: 40,
    rows: 3,
};

export default TextArea;