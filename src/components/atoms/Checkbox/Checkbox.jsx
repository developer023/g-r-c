import styles from "./Checkbox.module.scss";

const Checkbox = ({ checked, onChange }) => {
  return (
    <input
      type="checkbox"
      className={styles.checkbox}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
