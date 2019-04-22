import React from 'react';
import Input from '../../Components/Input';
import ButtonComponent from '../../Components/Button';
import TextAreaComponent from '../../Components/TextArea';
import Message from '../../Components/Message';
import './register-form.css';
import PropTypes from 'prop-types';

function RegisterForm({ arrayInput, textArea, onClick, disabled, messageData }) {
  const saveOnClick = ()=> {
    onClick();
  }

  const GiveInputs = () => {
    const listItems = arrayInput.map((item, i) =>
      <Input
        key={i}
        onChange={item.onChange}
        onBlur={item.onBlurChange}
        label={item.label}
        placeholder={item.placeholder}
        errormessage={item.errorMessage}
        autoFocus={false}
        value={item.value}
        type={item.type}
        objectKey={item.label}
      />);
    return listItems;
  };

  return (
    <div className='register-form'>
      {/* <form> */}
        <Message text={messageData.text} type={messageData.type} visible={messageData.visible} />
        <div>
          {GiveInputs()}
        </div>
        <div>
          <TextAreaComponent 
            visible={textArea.visible}
            onChange={textArea.onChange}
            label={textArea.label}
            placeholder={textArea.placeholder}
            errormessage={textArea.errormessage}
            autoFocus={false}
            value={textArea.value}
            type={textArea.type}
            cols={textArea.cols}
            rows={textArea.rows}
            objectKey={textArea.label}
          />
        </div>
      {/* </form> */}
      <ButtonComponent
          onClick={saveOnClick}
          disabled={disabled}
          type='primary'
          text='Save'
        />
    </div>
  );
}

RegisterForm.defaultProps = {
  arrayInput: [],
  textArea: {},
  onClick: () => { }
};

RegisterForm.propTypes = {
  arrayInput: PropTypes.array,
  textArea: PropTypes.object,
  onClick: PropTypes.func,
};

export default RegisterForm;