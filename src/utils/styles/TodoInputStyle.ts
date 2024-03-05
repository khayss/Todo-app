export const TodoInputStyle = {
  formContainer: { className: "flex items-end w-full gap-2" },
  inputContainer: { className: "flex flex-col w-4/5" },
  label: { className: "text-xl font-semibold text-blue-800 ml-5" },
  input: {
    className:
      "border-2 bg-blue-100 text-blue-800 font-medium border-blue-800 rounded-full h-12 w-full pl-5 outline-none focus:bg-white hover:bg-white",
  },
  submitBtn: {
    className:
      "flex items-center justify-center gap-1 uppercase bg-blue-800 text-white w-1/5 h-12 rounded-full text-lg font-semibold hover:opacity-80 cursor-pointer transform hover:scale-110 hover:rounded-full ease-in-out transition-transform",
  },
};
