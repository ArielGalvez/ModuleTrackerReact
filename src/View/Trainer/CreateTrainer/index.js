import React from 'react';
import { connect } from 'react-redux';
import actions from './actions';
import RegisterForm from '../../../Containers/RegisterForm';
import TrainerService from '../../../Services/TrainerServices';
import './style-trainer.css';

class CreateTrainer extends React.Component {
  constructor() {
    super();
    this.state = {
      message: {
        text: '',
        type: '',
        visible: true
      }
    }
  }

  handleChange = (key, value) => {
    this.props.updateFormTrainer({ key, value });
  };

  onBlurChange = (key) => {
    this.props.updateFormErrorTrainer({ key });
  };

  buttonSave = async () => {
    const { name, patternLastName, matternLastName, ci, email, phone } = this.props;
    const trainer = {
      Names: name.value,
      PaternalLastName: patternLastName.value,
      MaternalLastName: matternLastName.value,
      CI: Number(ci.value),
      Email: email.value,
      Phone: Number(phone.value),
      Image: "fakeImage"
    }
    console.log(trainer);
    try {
      const request = await TrainerService.postTrainer(trainer);
      const newType = request.data.State ? 'success' : 'fail';
      this.setState({
        message: { text: request.data.Message, type: newType, visible: false },
      });
      if (newType === 'success') {
        this.props.cleanTrainerForm();
      }
    } catch (error) {
      this.setState({
        message: { text: 'No connection', type: 'fail', visible: false },
      });
    }
    setTimeout(() => {
      this.setState({
        message: { text: '', type: '', visible: true },
      });
    }, 10000)
  }

  changeDisabledButton = (name, ci, email, phone, patternLastName, matternLastName) => {
    if (name || ci || email || phone) {
      return true;
    }
    else {
      if (!patternLastName) {
        return false;
      }
      if (!matternLastName) {
        return false;
      }
      if (!patternLastName && !matternLastName) {
        return false;
      }
    }
    return true;
  }

  render() {
    const { name, patternLastName, matternLastName, ci, email, phone } = this.props;
    const inputData = [
      {
        onChange: this.handleChange,
        onBlurChange: this.onBlurChange,
        label: 'name',
        placeHolder: 'Insert Name',
        errorMessage: name.errorMessage,
        value: name.value,
        type: 'text'
      },
      {
        onChange: this.handleChange,
        onBlurChange: this.onBlurChange,
        label: 'Paternal Last name',
        placeHolder: 'Insert Paternal Last name',
        errorMessage: patternLastName.errorMessage,
        value: patternLastName.value,
        type: 'text'
      },
      {
        onChange: this.handleChange,
        onBlurChange: this.onBlurChange,
        label: 'Maternal Last Name',
        placeHolder: 'Insert Maternal Last Name',
        errorMessage: matternLastName.errorMessage,
        value: matternLastName.value,
        type: 'text'
      },
      {
        onChange: this.handleChange,
        onBlurChange: this.onBlurChange,
        label: 'CI',
        placeHolder: 'Insert CI',
        errorMessage: ci.errorMessage,
        value: ci.value,
        type: 'number'
      },
      {
        onChange: this.handleChange,
        onBlurChange: this.onBlurChange,
        label: 'Email',
        placeHolder: 'Insert Email',
        errorMessage: email.errorMessage,
        value: email.value,
        type: 'email'
      },
      {
        onChange: this.handleChange,
        onBlurChange: this.onBlurChange,
        label: 'Phone',
        placeHolder: 'Insert Phone',
        errorMessage: phone.errorMessage,
        value: phone.value,
        type: 'number'
      }
    ];
    const textArea = {
      visible: true,
      onChange: this.handleChange,
      label: '',
      placeHolder: 'Insert Academic Degree',
      type: 'textarea',
      cols: 20,
      rows: 10
    }

    let disabledButton = this.changeDisabledButton(name.errorMessage, ci.errorMessage, email.errorMessage, phone.errorMessage, patternLastName.errorMessage, matternLastName.errorMessage);

    const messageData= {
      text: this.state.message.text, 
      type: this.state.message.type,
      visible: this.state.message.visible
    }

    return (
      <div className="trainer">
        <RegisterForm 
          arrayInput={inputData} 
          textArea={textArea} 
          onClick={this.buttonSave} 
          disabled={disabledButton} 
          messageData={messageData}
        />
      </div>
    )
  }
}

const mapStatesToProps = (state) => {
  return {
    name: state.CreateTrainer.name,
    patternLastName: state.CreateTrainer.patternLastName,
    matternLastName: state.CreateTrainer.matternLastName,
    ci: state.CreateTrainer.ci,
    email: state.CreateTrainer.email,
    phone: state.CreateTrainer.phone,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTrainer: (payload) => dispatch(actions.ADD_TRAINER(payload)),
    updateFormTrainer: (payload) => dispatch(actions.UPDATE_TRAINER_FORM(payload)),
    updateFormErrorTrainer: (payload) => dispatch(actions.UPDATE_TRAINER_ERRORMESSAGE(payload)),
    cleanTrainerForm: () => dispatch(actions.CLEAN_TRAINER_FORM()),
  }
}


export default connect(mapStatesToProps, mapDispatchToProps)(CreateTrainer);
