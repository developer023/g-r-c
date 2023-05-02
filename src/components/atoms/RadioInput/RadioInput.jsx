import styles from "./RadioInput.module.scss";

const RadioInput = ({ id, name, children, checked, onChange }) => (
  <div className={styles.wrapper}>
    <input
      type="radio"
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={id}>{children}</label>
  </div>
);

export default RadioInput;
