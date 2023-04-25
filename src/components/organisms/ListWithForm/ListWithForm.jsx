import { AddToDoItemForm, ToDoList } from "components";
import styles from "./ListWithForm.module.scss";

const ListWithForm = () => {
  const list = [
    {
      id: 1,
      title: "Learn React",
    },
    {
      id: 2,
      title: "Learn Redux",
    },
    {
      id: 3,
      title: "Learn GraphQL",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>ToDo</h1>
      <AddToDoItemForm />
      <ToDoList list={list} />
    </div>
  );
};

export default ListWithForm;
