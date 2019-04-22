import React from 'react';
import { connect } from 'react-redux';
import actions from './actions';
import RegisterForm from '../../../Containers/RegisterForm';
import StudentService from '../../../Services/StudentServices';
// import Message from '../../../Components/Message';
import './style-student.css';


class CreateStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      message: {
        text: '',
        type: '',
        visible: true
      }
    }
  };

  /* giveMessage = (text, type, delay) => {
    return <Message text={text} type={type} delay={delay} />
  }; */

  handleChange = (key, value) => {
    this.props.updateFormStudent({ key, value });
  };

  onBlurChange = (key) => {
    this.props.updateFormErrorStudent({ key });
  };
  
  buttonSave = async () => {
    const { name, patternLastName, matternLastName, ci, email, phone, academicDegree } = this.props;
    const student = {
      Names: name.value,
      PaternalLastName: patternLastName.value,
      MaternalLastName: matternLastName.value,
      CI: Number(ci.value),
      Email: email.value,
      Phone: Number(phone.value),
      AcademicGrade: academicDegree.value,
      Image: "fakeImage"
    }
    try {
      const request = await StudentService.postStudent(student);
      const newType = request.data.State ? 'success' : 'fail';
      this.setState({
        message: { text: request.data.Message, type: newType, visible: false },
      });
      if(newType === 'success'){
        this.props.cleanStudentForm();
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
    if(name || ci || email || phone) {
      return true;
    } 
    else {
      if(!patternLastName)
      {
        return false;
      }
      if(!matternLastName)
      {
        return false;
      }
      if(!patternLastName && !matternLastName)
      {
        return false;
      }
    }
      return true; 
  }


render() {
  const { name, patternLastName, matternLastName, ci, email, phone, academicDegree } = this.props;

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
    visible: false,
    onChange: this.handleChange,
    label: 'Academic Degree',
    placeHolder: 'Insert Academic Degree',
    errorMessage: academicDegree.errorMessage,
    value: academicDegree.value,
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
    <div className="student">
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
    name: state.CreateStudent.name,
    patternLastName: state.CreateStudent.patternLastName,
    matternLastName: state.CreateStudent.matternLastName,
    ci: state.CreateStudent.ci,
    email: state.CreateStudent.email,
    phone: state.CreateStudent.phone,
    academicDegree: state.CreateStudent.academicDegree
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (payload) => dispatch(actions.ADD_STUDENT(payload)),
    updateFormStudent: (payload) => dispatch(actions.UPDATE_STUDENT_FORM(payload)),
    updateFormErrorStudent: (payload) => dispatch(actions.UPDATE_STUDENT_ERRORMESSAGE(payload)),
    cleanStudentForm: () => dispatch(actions.CLEAN_STUDENT_FORM()),
  }
}


export default connect(mapStatesToProps, mapDispatchToProps)(CreateStudent);
