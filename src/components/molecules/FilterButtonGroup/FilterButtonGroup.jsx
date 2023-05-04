import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilterSelector } from 'redux/todo/selectors';
import { RadioInput } from 'components';
import styles from './FilterButtonGroup.module.scss';

function FilterButtonGroup({ onChange }) {
  const filterState = useSelector(getFilterSelector);
  const filterStorage = JSON.parse(localStorage.getItem('filter'));
  const filter = filterStorage || filterState;

  return (
    <div className={styles.group} data-testid="filter-button-group">
      <RadioInput
        id="all"
        name="filter"
        checked={filter === 'all'}
        onChange={onChange}
      >
        All
      </RadioInput>
      <RadioInput
        id="active"
        name="filter"
        checked={filter === 'active'}
        onChange={onChange}
      >
        Active
      </RadioInput>
      <RadioInput
        id="completed"
        name="filter"
        checked={filter === 'completed'}
        onChange={onChange}
      >
        Completed
      </RadioInput>
    </div>
  );
}

export default FilterButtonGroup;

FilterButtonGroup.propTypes = {
  onChange: PropTypes.func.isRequired,
};
