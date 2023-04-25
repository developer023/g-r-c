import { Button } from "components";
import styles from "./FilterButtonGroup.module.scss";

const FilterButtonGroup = () => (
  <div className={styles.group}>
    <Button onClick={() => {}}>All</Button>
    <Button onClick={() => {}}>Active</Button>
    <Button onClick={() => {}}>Completed</Button>
  </div>
);

export default FilterButtonGroup;
