/* eslint-disable react/prop-types */

const TodoData = (props) => {
    
    const { todoList, removeTodo } = props;
    const handleClick = (id) => {
        removeTodo(id);
    }

    console.log(">>>> check props: ", todoList)
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                console.log(">>>> check item: ", item, index);
                return (
                    // eslint-disable-next-line react/jsx-key
                    <div className={`todo-item`} key={item.id}>
                        <div>{item.name} </div>
                        <button
                            onClick={() => handleClick(item.id)}
                            style={{cursor: "pointer"}}>Remove</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;