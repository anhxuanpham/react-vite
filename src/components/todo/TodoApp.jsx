import {useState} from "react";
import TodoNew from "./TodoNew.jsx";
import TodoData from "./TodoData.jsx";
import reactLogo from "../../assets/react.svg";


const TodoApp = () => {
    const [todoList, setTodoList] = useState([

    ])


    const addNewTodo = (name) => {
        const newTodo = {
            id: randomInterval(1, 1000),
            name: name
        }
        setTodoList([...todoList, newTodo]);
    }
    const randomInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const removeTodo = (id) => {
        console.log(">>>> removeTodo", id);
        setTodoList(todoList.filter(item => item.id !== id));
    }

    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew
                addNewTodo={addNewTodo}
            />
            {todoList.length > 0 ?
                <TodoData
                    todoList={todoList}
                    removeTodo={removeTodo}
                />
                :
                <div className='todo-image'>
                    <img src={reactLogo} className='logo'/>
                </div>
            }
        </div>
    )


}

export default TodoApp;