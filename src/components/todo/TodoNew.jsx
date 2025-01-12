/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoNew = (props) => {
    // console.log(">>>> check props", props)

    // const valueInput = 'William';
    const [valueInput, setValueInput] = useState('William');


    const { addNewTodo } = props;

    // addNewTodo('William');

    const handleClick = () => {
        console.log('>>>>Check valueInput: ', valueInput);
        addNewTodo(valueInput);
        setValueInput('');
    }

    const handleOnChange = (name) => {
        // console.log('>>>>>>>handleOnChange', name);
        setValueInput(name);
    }
   
    return (
        <div className='todo-new'>
        <input className='todo-input' type="text" placeholder='Enter your task'
        onChange={(event) => handleOnChange(event.target.value)}
        value={valueInput}
        />
        <button className='todo-button'
        style= {{cursor: "pointer"}}
        onClick={handleClick}
        >Add</button>
        <div className='todo-text'>My input is {valueInput} </div>
      </div>
    )
}

export default TodoNew;