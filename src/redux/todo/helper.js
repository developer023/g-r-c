export const filterList = (list, filter) => {
  switch (filter) {
    case "all":
      return list;
    case "completed":
      return list.filter((item) => item.isCompleted);
    case "active":
      return list.filter((item) => !item.isCompleted);
    default:
      return list;
  }
};
