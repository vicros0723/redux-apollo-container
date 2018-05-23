import { State } from ".";
import { MenuAction, SELECT_MENU_DATE_ACTION_TYPE } from "@Actions/menu-action";

export function updateState(state: State, action: MenuAction): State {
  switch (action.type) {
    case SELECT_MENU_DATE_ACTION_TYPE:
      return {
        ...state,
        menuDate: action.menuDate
      };
    default:
      return state;
  }
}
