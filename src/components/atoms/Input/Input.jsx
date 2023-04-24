import styles from "./Input.module.scss";

const Input = ({ placeholder, onChange }) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
