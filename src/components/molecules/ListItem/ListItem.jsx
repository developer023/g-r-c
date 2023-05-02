import { Checkbox, RoundButton } from "components";
import { Close } from "assets";
import styles from "./ListItem.module.scss";

const ListItem = ({
  id,
  description,
  isCompleted,
  deleteItem,
  changeComplete,
}) => {
  return (
    <li className={styles.item} id={id}>
      <div className={styles.labelWrapper}>
        <Checkbox checked={isCompleted} onChange={changeComplete} />
        <span className={isCompleted ? styles.lineThrough : ""}>
          {description}
        </span>
      </div>
      <RoundButton type="button" onClick={deleteItem}>
        <Close />
      </RoundButton>
    </li>
  );
};

export default ListItem;
