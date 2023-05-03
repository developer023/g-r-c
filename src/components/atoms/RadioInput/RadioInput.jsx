import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioInput.module.scss';

function RadioInput({ id, name, children, checked, onChange }) {
  return (
    <div className={styles.wrapper}>
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}

export default RadioInput;

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
