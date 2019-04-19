import React from 'react';
import PropTypes from 'prop-types';
import './people-picker.css';

import PersonPill from '../../Components/PersonPill';

function PeoplePicker({people, selectedPeople, onChange}) {
    const onClickFunction = (id) => {
        onChange(id);
    }

    return (
        <section className="peoplepicker-component">
            {people.map((element, index) => {
                const active = (selectedPeople.includes(element.id) ? true : false)
                
                return (<PersonPill key={index} id={element.id} src={element.src} name={element.name} onChange={onClickFunction} active={active}></PersonPill>)
            })}
        </section>
    )
}

PeoplePicker.propTypes = {
    people: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        onChange: PropTypes.func,
        active: PropTypes.bool,
        name: PropTypes.string
      })
    ),
    onChange: PropTypes.func,
    selectedPeople: PropTypes.array
};
  
PeoplePicker.defaultProps = {
    people: [],
    onChange: null,
    selectedPeople: []
};

export default PeoplePicker;