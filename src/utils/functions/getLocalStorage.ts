import { Todo } from "../../types/Todo";

export const getLocalStorage = (key: string) => {
  const items = localStorage.getItem(key);
  if (typeof items === "string") {
    const parsedItems = JSON.parse(items);
    if (Array.isArray(parsedItems)) {
      return parsedItems.map((item) => {
        return { ...item, isEditing: false };
      }) as Todo[];
    } else {
      return [] as Todo[];
    }
  } else {
    return [] as Todo[];
  }
};
