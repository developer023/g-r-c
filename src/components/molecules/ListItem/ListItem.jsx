import { Checkbox, RoundButton } from "components";
import { Close } from "assets";
import styles from "./ListItem.module.scss";

const ListItem = ({ title }) => (
  <li className={styles.item}>
    <div className={styles.labelWrapper}>
      <Checkbox onClick={() => {}} />
      <span>{title}</span>
    </div>
    <RoundButton type="button" onClick={() => {}}>
      <Close />
    </RoundButton>
  </li>
);

export default ListItem;
