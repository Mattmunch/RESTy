import React from 'react';
import PropTypes from 'prop-types'
;
const Form = ({ onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <input onChange={onChange} name="url" type="text" placeholder="URL"/>
    <input onChange={onChange} type="radio" value="GET" name="method"/>GET
    <input onChange={onChange} type="radio" value="POST" name="method"/>POST
    <input onChange={onChange} type="radio" value="PUT" name="method"/>PUT
    <input onChange={onChange} type="radio" value="PATCH" name="method"/>PATCH
    <input onChange={onChange} type="radio" value="DELETE" name="method"/>DELETE
    <textarea onChange={onChange} type="text" placeholder="Raw JSON Body"></textarea>
    <button>Go!</button>
  </form>
)
    ;
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;
