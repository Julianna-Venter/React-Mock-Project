import { MouseEvent } from "react";

//a component cannot return multiple elements. It can only return a single element.
function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston"];

  // items = [];

  const handleClick = (event: MouseEvent) => {
    console.log("Clicked: ", event, "!");
  };

  // <> <=> <Fragment>
  //This is a built-in component that allows you to return multiple elements from a component, without adding extra nodes to the DOM.
  //You are not calling the handleClick function, you are passing a reference to it.
  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>There are no items in the list.</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
