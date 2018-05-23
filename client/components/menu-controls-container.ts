import { connect, Dispatch } from "react-redux";
import { State } from "@Reducers/index";
import { SELECT_MENU_DATE_ACTION_TYPE } from "@Actions/menu-action";
import { MenuControls as MenuControlsComponent, Props as MenuControlsProps } from "@Components/menu-controls-component";

// Redux
type StateProps = Pick<MenuControlsProps, "date">;

type DispatchProps = Pick<MenuControlsProps, "selectDate">;

function mapStateToProps(state: State): StateProps {
  return {
    date: state.menuDate
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>): DispatchProps {
  return {
    selectDate: (date) => {
      dispatch({
        type: SELECT_MENU_DATE_ACTION_TYPE,
        menuDate: date
      });
    }
  };
}

const connectRedux = connect(mapStateToProps, mapDispatchToProps);

export const MenuControls = connectRedux(MenuControlsComponent);
