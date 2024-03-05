import { Action } from "../../types/Action";
import { TodoOnChangeHandler } from "../../types/TodoOnChangeHandler";
import { ChangeEvent, Dispatch } from "react";
import { TodoState } from "../../types/TodoState";
export const todoChangeHandler: TodoOnChangeHandler = (
  event: ChangeEvent<HTMLInputElement>,
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: TodoState.INPUT, payload: event.target.value });
};
