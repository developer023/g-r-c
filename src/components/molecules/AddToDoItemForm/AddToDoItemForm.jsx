import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'components';
import styles from './AddToDoItemForm.module.scss';

function AddToDoItemForm({ value, onChange, onSubmit }) {
  return (
    <form className={styles.form} onSubmit={onSubmit} data-testid="item-form">
      <Input
        type="text"
        placeholder="Add new item"
        value={value}
        onChange={onChange}
      />
    </form>
  );
}

export default AddToDoItemForm;

AddToDoItemForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
