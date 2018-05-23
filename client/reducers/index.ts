import { Action } from "@Actions/index";
import { updateState as updateMenuState } from "@Reducers/menu-reducer";

export interface State {
  menuDate: Date;
}

export const defaultState: State = {
  menuDate: new Date()
};

export function updateState(state: State, action: Action): State {
  let updatedState = state;
  updatedState = updateMenuState(updatedState, action);
  return updatedState;
}
