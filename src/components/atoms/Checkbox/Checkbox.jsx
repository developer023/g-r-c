import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.scss';

function Checkbox({ checked, onChange }) {
  return (
    <input
      type="checkbox"
      className={styles.checkbox}
      checked={checked}
      onChange={onChange}
    />
  );
}

export default Checkbox;

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
