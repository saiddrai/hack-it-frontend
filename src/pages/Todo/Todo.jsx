const Todo = () => {
    return ( <div>
        <h1>Your Todo List</h1>
        <div className="list">
            <div className="element">
                <p>Category</p>
                <button>Important</button>
            </div>
            <div className="element">
                <p>Due date</p>
                <button>Important</button>
            </div>
        </div>
    </div> );
}
 
export default Todo;