import { useSelector } from "react-redux";
import { getFilterSelector } from "redux/todo/selectors";
import { RadioInput } from "components";
import styles from "./FilterButtonGroup.module.scss";

const FilterButtonGroup = ({ onChange }) => {
  const filter = useSelector(getFilterSelector);

  return (
    <div className={styles.group}>
      <RadioInput
        id="all"
        name="filter"
        checked={filter === "all"}
        onChange={onChange}
      >
        All
      </RadioInput>
      <RadioInput
        id="active"
        name="filter"
        checked={filter === "active"}
        onChange={onChange}
      >
        Active
      </RadioInput>
      <RadioInput
        id="completed"
        name="filter"
        checked={filter === "completed"}
        onChange={onChange}
      >
        Completed
      </RadioInput>
    </div>
  );
};

export default FilterButtonGroup;
