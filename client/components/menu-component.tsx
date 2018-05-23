import * as React from "react";

interface MenuItem {
  name: string;
  priceInCents: number;
}

export interface Props {
  items: MenuItem[];
}

export class Menu extends React.Component<Props, {}> {
  render() {
    return <div>
      {this.props.items.map((item) => {
        return <div className="menu-item" key={item.name}>
          <div className="menu-item-name">{item.name}</div>
          <div className="menu-item-price">${item.priceInCents / 100}</div>
        </div>;
      })}
    </div>;
  }
}
