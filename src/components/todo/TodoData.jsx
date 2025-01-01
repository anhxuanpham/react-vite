/* eslint-disable react/prop-types */

const TodoData = (props) => {
    
    const { name, age, data } = props;

    // console.log(">>>> check props", props)
    return (
        <div className="todo-data">
        <div>William </div>
        <div>Learning React</div>
        <div> My name is{name}</div>
        <div>Im {age}</div>
        <div>{JSON.stringify(data)}</div>
        <div>{JSON.stringify(props.todoList)}</div>

        
      </div>
    )
}

export default TodoData;