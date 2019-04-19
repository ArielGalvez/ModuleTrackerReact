import React, { Component } from 'react';
import PersonPill from '../../Components/PersonPill';
import PeoplePicker from '../../Containers/PeoplePicker';
import Dropdown from '../../Components/Dropdown'
class TestViews extends Component {
  onClick = () => {
    console.log('algo');
  }  
  optionList =['option1','option2','option3'];
  onClick2 = value => {    
  console.log(value);
};
placeHolder = 'select an option';
  render() {
    const people = [
      {
        id: 'asd',
        src: '',
        name: 'Juan Sanchez'
      },
      {
        id: 'asd',
        src: '',
        name: 'Juan Alvarez'
      },
      {
        id: 'asd',
        src: '',
        name: 'Juan Rodriguez'
      },{
        id: 'asd',
        src: '',
        name: 'Juan Caceres'
      }
    ]
    const selected = []
    const result = () => {}

    return (
      <>
      <div className="TestViews">
        <PeoplePicker people={people} selectedPeople={selected} onChange={result}></PeoplePicker>
        <PersonPill id={'11'} name={'Rose Mary Byrme'}  onChange={onclick} active={false} ></PersonPill>
      </div>
      <div>
        <Dropdown typesList={this.optionList} onClick={this.onClick2} placeHolder={this.placeHolder} title={'title2'}></Dropdown>
      </div>
      </>
    );
  }
}

export default TestViews;
