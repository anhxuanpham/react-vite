/* eslint-disable react/prop-types */

const TodoNew = (props) => {
    console.log(">>>> check props", props)
    const { addNewTodo } = props;

    addNewTodo('William');

    const handleClick = () => {
        alert('Clickme');
    }

    const handleOnChange = (name) => {
        console.log('>>>>>>>handleOnChange', name);
    }
   
    return (
        <div className='todo-new'>
        <input type="text" placeholder='Enter your task'
        onChange={() => {handleOnChange(event.target.value)}}
        />
        <button 
        style= {{cursor: "pointer"}}
        onClick={handleClick}
        >Add</button>
      </div>
    )
}

export default TodoNew;