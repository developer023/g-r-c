import { ListItem, FilterButtonGroup } from "components";
import styles from "./ToDoList.module.scss";

const ToDoList = ({ list, onClick }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {list.map(({ title }, index) => (
          <ListItem key={index} title={title} onClick={onClick} />
        ))}
      </ul>
      <div className={styles.additionalInfo}>
        Count: {list.length}
        <FilterButtonGroup />
      </div>
    </div>
  );
};

export default ToDoList;
