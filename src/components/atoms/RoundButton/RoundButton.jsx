import React from 'react';
import PropTypes from 'prop-types';
import styles from './RoundButton.module.scss';

function RoundButton({ children, onClick }) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default RoundButton;

RoundButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
