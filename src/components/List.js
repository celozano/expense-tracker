import React, { Component } from "react";
import ListItem from "./ListItem";

class LinkList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.list.length !== nextProps.list.length) {
      return true;
    }
    return false;
  }

  render() {
    if (this.props.list.length < 1) {
      return null;
    }

    return this.props.list.map((item, index) => {
      return (
        <ListItem
          key={index}
          description={item.description}
          cost={item.cost}
          quantity={item.quantity}
          total={item.total}
        />
      );
    });
  }
}

export default LinkList;
