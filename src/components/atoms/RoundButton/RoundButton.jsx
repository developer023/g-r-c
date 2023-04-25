import styles from "./RoundButton.module.scss";

const RoundButton = ({ children, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default RoundButton;
