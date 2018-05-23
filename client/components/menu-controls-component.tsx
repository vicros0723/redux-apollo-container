import * as moment from "moment";
import * as React from "react";

export interface Props {
  date: Date,
  selectDate: (date: Date) => void
}

export class MenuControls extends React.Component<Props, {}> {
  render() {
    return <input type="date" value={moment(this.props.date).format("YYYY-MM-DD")} onChange={(event) => {
      this.props.selectDate(moment(event.target.value).toDate());
    }}/>
  }
}
