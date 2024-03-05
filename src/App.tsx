//This is the main file of the application. It is the first file that is executed when the application is started. It is responsible for rendering the application and handling the routing.

import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App; //export the component to be used in other files
