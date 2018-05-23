export const SELECT_MENU_DATE_ACTION_TYPE = "SELECT_MENU_DATE_ACTION_TYPE";
interface SelectMenuDateAction {
  type: typeof SELECT_MENU_DATE_ACTION_TYPE
  menuDate: Date;
}

export type MenuAction = SelectMenuDateAction;
