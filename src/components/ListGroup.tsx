// import { MouseEvent } from "react";

import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

//each component has its own state
//a component cannot return multiple elements. It can only return a single element.
//props are inputs to a component (pass data to a component)
function ListGroup({ items, heading }: ListGroupProps) {
  // let selectedIndex = 0;

  //Hook => this component has data that changes over time
  const [selectedIndex, setSelectedIndex] = useState(-1); //returns an array with 2 elements
  // arr[0]; //Current state / variable (selectedIndex)
  // arr[1]; //Updater function

  // items = [];

  // const handleClick = (event: MouseEvent) => {
  //   console.log("Clicked: ", event, "!");
  // };

  // <> <=> <Fragment>
  //This is a built-in component that allows you to return multiple elements from a component, without adding extra nodes to the DOM.
  //You are not calling the handleClick function, you are passing a reference to it.
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>There are no items in the list.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              console.log("Clicked: ", item, "!");
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
