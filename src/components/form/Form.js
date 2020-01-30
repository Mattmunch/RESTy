import React from 'react';
import PropTypes from 'prop-types'
;
const Form = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" placeholder="URL"></input>
    <input type="radio" placeholder=""></input>
    <input type="radio" placeholder=""></input>
    <input type="radio" placeholder=""></input>
    <input type="radio" placeholder=""></input>
    <input type="radio" placeholder=""></input>
    <input type="text" placeholder=""></input>
    <button>Go!</button>
  </form>
)
    ;
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;
