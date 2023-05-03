import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

function Input({ placeholder, value, onChange }) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
