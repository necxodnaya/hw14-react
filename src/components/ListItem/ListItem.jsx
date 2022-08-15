import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component {
  render() {
    return (
      <>
        {this.props.items.map((item) => {
          return (
            <div className="list" key={item.key}>
              <p>{item.text}</p>
              <h1
                className="delete"
                onClick={() => this.props.deletItem(item.key)}
              >
                x
              </h1>
            </div>
          );
        })}
      </>
    );
  }
}

// function ListItem(props) {
//   const items = props.items;
//   const listItems = items.map((item) => {
//     return (
//       <div className="list" key={item.key}>
//         <p>{item.text}</p>
//         <h1 className="delete" onClick={() => props.deletItem(item.key)}>
//           x
//         </h1>
//       </div>
//     );
//   });
//   return <div>{listItems}</div>;
// }

export default ListItem;
