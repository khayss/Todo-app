export const TodoItemStyle = {
  mainTodoItemsContainer: {
    className:
      "flex justify-between w-full h-12 items-center font-normal gap-1",
  },
  mainTodoItemsContainerChecked: {
    className:
      "flex justify-between w-full h-12 items-center font-normal gap-1 opacity-50",
  },
  todoContainer: {
    className:
      "text-white w-2/3 bg-blue-800 h-full pl-5 flex items-center rounded-full cursor-pointer",
  },
  todoText: { className: "text-lg font-medium" },
  todoTextChecked: { className: "text-lg font-medium line-through" },
  btnContainer: { className: "flex w-1/3 h-full gap-1" },
  editBtn: {
    className:
      "flex justify-center items-center w-1/2 h-full hover:bg-green-600 border-2 border-green-600 bg-blue-100 text-green-600 hover:text-white hover:border-0 uppercase font-semibold rounded-full transform hover:scale-105 ease-in-out transition-transform",
  },
  deleteBtn: {
    className:
      "flex justify-center items-center w-1/2 h-full bg-blue-100 hover:bg-red-700 hover:text-white text-red-700 border-2 border-red-600 hover:border-0 rounded-full uppercase font-semibold transform hover:scale-105 ease-in-out transition-transform",
  },
};
