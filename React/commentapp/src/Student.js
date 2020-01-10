import  React from 'react';
import PropTypes from 'prop-types';

function Student(props){
    return (
    <div>
        <span>{props.name}</span>
        <span>{props.roll}</span>
        <span>{props.course}</span>
        <span>{props.department}</span>
    </div>
    );
}

Student.propTypes ={
    name: PropTypes.string.isRequired,
    roll: PropTypes.number.isRequired,
    //course: PropTypes.oneOf['JS','NODE.JS','REACT.JS'],
    //department:PropTypes.oneOf['CSE','ECE']
};

export default Student;