// Input.js
import React from 'react';

const Input = ({ label, onChange, value }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" onChange={onChange} value={value} />
    </div>
  );
};

export default Input;
