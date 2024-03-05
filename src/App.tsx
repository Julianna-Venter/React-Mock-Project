//This is the main file of the application. It is the first file that is executed when the application is started. It is responsible for rendering the application and handling the routing.

import ListGroup from "./components/ListGroup";

function App() {
  const handleSelectItem = (item: string) => {
    console.log("Selected Item: ", item, "!");
  };

  let items = ["New York", "Los Angeles", "Chicago", "Houston"];
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App; //export the component to be used in other files
