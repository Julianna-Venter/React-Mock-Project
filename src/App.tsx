//This is the main file of the application. It is the first file that is executed when the application is started. It is responsible for rendering the application and handling the routing.

import Message from "./Message";


function App() {
  return (
    <div>
      <Message />
    </div>
  )
}

export default App; //export the component to be used in other files