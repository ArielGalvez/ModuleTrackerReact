import React, { Component } from 'react'
import { connect } from 'react-redux';
import actions from './actions';
import PeoplePicker from '../../../Containers/PeoplePicker';
import Input from '../../../Components/Input';
import Dropdown from '../../../Components/Dropdown';
import Button from '../../../Components/Button';
import './CreateModule.css';

class CreateModule extends Component {
  render() {
    const { moduleTracker } = this.props;
    //recuperar estos dos vectores de la bd;
    const students = [
      {
        id: '1',
        src: '',
        name: 'Juan Sanchez'
      },
      {
        id: '2',
        src: '',
        name: 'Juan Alvarez'
      },
      {
        id: '3',
        src: '',
        name: 'Juan Rodriguez'
      }, {
        id: '4',
        src: '',
        name: 'Juan Caceres'
      }
    ];
    const trainers = [
      {
        id: '1',
        src: '',
        name: 'Juan Sanchez'
      },
      {
        id: '2',
        src: '',
        name: 'Juan Alvarez'
      }
    ];

    const result = () => { }
    const optionList = ['DEV', 'AT', 'MT'];// estos tb de la bd
    const onClick2 = value => {
      console.log(value);
    };

    return (
      <div className="CreateModule">
          <Dropdown typesList={optionList} onClick={onClick2} placeHolder={'select an option'} title={'Type'}></Dropdown>
          <Input
            onChange={this.handleChangeModuleName}
            onBlur={result} label={'Number of module'}
            errormessage={''}
            value={moduleTracker.moduleName.value}
            objectKey={'Number of module'}
            type={'number'}
          />
          <h3>{'Students'}</h3>
          <PeoplePicker people={students} selectedPeople={moduleTracker.students} onChange={this.handleStudents} />
          <h3>{'Trainers'}</h3>
          <PeoplePicker people={trainers} selectedPeople={moduleTracker.trainers} onChange={this.handleTrainers} />
          <Button
            onClick={onClick2}
            disabled={false}
            type='primary'
            text='Save'
          />
      </div>
    )
  }

  handleStudents = (id) => {
    this.props.addStudent(id);
  }
  handleTrainers = (id) => {
    this.props.addTrainer(id);
  }
  handleChangeModuleName = (key, value) => {
    this.props.updateModuleName({ key, value });
  }
  onBlurChange = (key, errorMessage) => {
    this.props.updateModuleErrorMessage({ key, errorMessage });
  }
  handleModuleType = (value)=> {
    this.props.updateModuleType(value);
  }
}

const mapStatesToProps = (state) => {
  return {
    moduleTracker: state.CreateModule.moduleTracker
    // trainers: state.CreateModule.trainers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (payload) => dispatch(actions.ADD_STUDENT(payload)),
    addTrainer: (payload) => dispatch(actions.ADD_TRAINER(payload)),
    updateModuleName: (payload) => dispatch(actions.UPDATE_MODULE_NAME(payload)),
    updateModuleErrorMessage: (payload) => dispatch(actions.UPDATE_MODULE_ERROR_MESSAGE(payload)),
    cleanModuleForm: (payload) => dispatch(actions.CLEAN_MODULE_FORM(payload)),
    updateModuleType: (payload) => dispatch(actions.UPDATE_MODULE_TYPE(payload)),
  }
}


export default connect(mapStatesToProps, mapDispatchToProps)(CreateModule);
