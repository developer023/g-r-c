import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataSelector, getFilteredDataSelector } from 'redux/todo/selectors';
import { AddToDoItemForm, ToDoList } from 'components';
import { todoActionTypes } from 'redux/todo/slice';
import styles from './ListWithForm.module.scss';

function ListWithForm() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const data = useSelector(getDataSelector);
  const filteredData = useSelector(getFilteredDataSelector);

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(todoActionTypes.addItem(value));
    setValue('');
  };

  useEffect(() => {
    dispatch(todoActionTypes.getFilteredData(data));
  }, [dispatch, data]);

  return (
    <div className={styles.wrapper} data-testid="list-with-form">
      <h1 className={styles.title}>ToDo</h1>
      <AddToDoItemForm
        value={value}
        onChange={handleOnChange}
        onSubmit={handleSubmit}
      />
      <ToDoList data={filteredData} />
    </div>
  );
}

export default ListWithForm;
