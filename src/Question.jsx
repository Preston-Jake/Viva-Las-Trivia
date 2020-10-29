import React from 'react';
import PropTypes from 'prop-types';


const Question = (props) => {
    console.log(props)
    return (
        <div>
            <h2>{props.question}</h2>
        </div>
    );
};


Question.propTypes = {

};


export default Question;
