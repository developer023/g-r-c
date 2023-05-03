import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, RoundButton } from 'components';
import { Close } from 'assets';
import styles from './ListItem.module.scss';

function ListItem({
  id,
  description,
  isCompleted,
  deleteItem,
  changeComplete,
}) {
  return (
    <li className={styles.item} id={id} data-testid="list-item">
      <div className={styles['label-wrapper']}>
        <Checkbox checked={isCompleted} onChange={changeComplete} />
        <span className={isCompleted ? styles['line-through'] : ''}>
          {description}
        </span>
      </div>
      <RoundButton type="button" onClick={deleteItem}>
        <Close />
      </RoundButton>
    </li>
  );
}

export default ListItem;

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  deleteItem: PropTypes.func.isRequired,
  changeComplete: PropTypes.func.isRequired,
};
