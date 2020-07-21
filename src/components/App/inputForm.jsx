import React from 'react';
import propTypes from 'prop-types';

const inputForm = ({ username, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type='text' value={username} onChange={onChange}/>
    <button>Submit</button>
  </form>
);

inputForm.propTypes = {
  username: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired
};

export default inputForm;
