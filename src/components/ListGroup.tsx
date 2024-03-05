
//a component cannot return multiple elements. It can only return a single element.
function ListGroup() {

    const items = [
        'New York',
        'Los Angeles',
        'Chicago',
    ];
        
    
    // <> <=> <Fragment>
    //This is a built-in component that allows you to return multiple elements from a component, without adding extra nodes to the DOM.
    return (
        <> 
            <h1>List Group</h1>
            <ul className="list-group">
                {items.map((item) => (
                <li className="list-group-item" key={item} >{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
