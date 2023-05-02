import { Input } from "components";
import styles from "./AddToDoItemForm.module.scss";

const AddToDoItemForm = ({ value, onChange, onSubmit }) => (
  <form className={styles.form} onSubmit={onSubmit}>
    <Input
      type="text"
      placeholder="Add new item"
      value={value}
      onChange={onChange}
    />
  </form>
);

export default AddToDoItemForm;
