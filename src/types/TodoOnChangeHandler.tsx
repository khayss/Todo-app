import { ChangeEvent, Dispatch } from "react";
import { Action } from "./Action";

export type TodoOnChangeHandler = (
  e: ChangeEvent<HTMLInputElement>,
  dispatch: Dispatch<Action>
) => void;
