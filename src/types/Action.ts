import { TodoState } from "./TodoState";

interface InputUpdate {
  type: TodoState.INPUT;
  payload: string;
}
interface IdUpdate {
  type: TodoState.ID;
  payload: number;
}
interface Edit {
  type: TodoState.EDIT;
  payload: boolean;
}

interface Reset {
  type: TodoState.RESET;
}

export type Action = InputUpdate | IdUpdate | Edit | Reset;
