import { Input } from "components";
import styles from "./AddToDoItemForm.module.scss";

const AddToDoItemForm = () => (
  <form className={styles.form}>
    <Input type="text" placeholder="Add new item" />
  </form>
);

export default AddToDoItemForm;
