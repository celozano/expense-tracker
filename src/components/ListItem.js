import React from "react";

const LinkListItem = props => {
  return (
    <tr>
      <td>{props.description}</td>
      <td className="text-right">{props.cost}</td>
      <td className="text-right">{props.quantity}</td>
      <td className="text-right">{props.total}</td>
    </tr>
  );
};

export default LinkListItem;
