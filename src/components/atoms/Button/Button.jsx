import styles from "./Button.module.scss";

const Button = ({ id, children, onClick }) => (
  <button id={id} className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
