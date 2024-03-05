//this is a react component that will display the message
//Always use PascalCase for file names and component names

function Message() {
    //JSX: JavaScript XML
    const name = 'Jules';
  return (
    <div>
      <h1>Hello</h1>
      <p>{ name }</p>
    </div>
  )
}

export default Message; //export the component to be used in other files