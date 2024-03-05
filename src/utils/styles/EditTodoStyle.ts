export const EditTodoStyle = {
  formContainer: { className: "flex items-end w-full gap-2" },
  input: {
    className:
      "border-2 bg-blue-100 border-blue-800 text-blue-800 text-lg rounded-full h-10 w-full font-medium pl-5 outline-none focus:bg-white hover:bg-white",
  },
  updateBtn: {
    className:
      "flex items-center justify-center gap-1 uppercase bg-blue-800 text-white w-2/3 h-10 rounded-full text-lg font-semibold hover:opacity-80 cursor-pointer transform hover:scale-105 hover:rounded-full ease-in-out transition-transform",
  },
  deleteBtn: {
    className:
      "flex justify-center items-center w-1/3 h-10 bg-blue-100 hover:bg-red-700 hover:text-white text-red-700 border-2 border-red-600 hover:border-0 rounded-full uppercase font-semibold transform hover:scale-105 ease-in-out transition-transform",
  },
  btnContainer: { className: "flex w-1/3 h-full gap-1" },
  inputContainer: { className: "flex flex-col w-2/3" },
};
