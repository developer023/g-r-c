import { ListItem, FilterButtonGroup } from "components";
import styles from "./ToDoList.module.scss";
import { useDispatch } from "react-redux";
import { todoActionTypes } from "redux/todo/slice";

const ToDoList = ({ data }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = (event) => {
    const id = event.target.closest("li").id;
    dispatch(todoActionTypes.deleteItem(+id));
  };

  const handleChangeComplete = (event) => {
    const id = event.target.closest("li").id;
    dispatch(todoActionTypes.setCompleteState(+id));
  };

  const setFilter = (event) => {
    dispatch(todoActionTypes.setFilter(event.target.id));
  };

  return (
    <div className={styles.wrapper}>
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
      <div className={styles.additionalInfo}>
        Count: {data.length}
        <FilterButtonGroup onChange={setFilter} />
      </div>
    </div>
  );
};

export default ToDoList;
