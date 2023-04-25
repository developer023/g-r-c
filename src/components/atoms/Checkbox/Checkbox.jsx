import styles from "./Checkbox.module.scss";

const Checkbox = ({ onClick }) => {
  return (
    <input type="checkbox" className={styles.checkbox} onClick={onClick} />
  );
};

export default Checkbox;
