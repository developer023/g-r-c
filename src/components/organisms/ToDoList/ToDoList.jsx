import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ListItem, FilterButtonGroup } from 'components';
import { todoActionTypes } from 'redux/todo/slice';
import styles from './ToDoList.module.scss';

function ToDoList({ data }) {
  const dispatch = useDispatch();

  const handleDeleteItem = (event) => {
    const { id } = event.target.closest('li');
    dispatch(todoActionTypes.deleteItem(+id));
    dispatch(todoActionTypes.getFilteredData(data));
  };

  const handleChangeComplete = (event) => {
    const { id } = event.target.closest('li');
    dispatch(todoActionTypes.setCompleteState(+id));
  };

  const setFilter = (event) => {
    dispatch(todoActionTypes.setFilter(event.target.id));
    dispatch(todoActionTypes.getFilteredData(data));
  };

  return (
    <div className={styles.wrapper} data-testid="todo-list">
      {!data.length ? (
        <p className={styles.empty}>List is empty</p>
      ) : (
        <ul className={styles.list}>
          {data.map(({ description, isCompleted, id }) => (
            <ListItem
              key={id}
              id={id}
              description={description}
              isCompleted={isCompleted}
              deleteItem={handleDeleteItem}
              changeComplete={handleChangeComplete}
            />
          ))}
        </ul>
      )}
      <div className={styles['additional-info']}>
        Count: {data.length}
        <FilterButtonGroup onChange={setFilter} />
      </div>
    </div>
  );
}

export default ToDoList;

ToDoList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
