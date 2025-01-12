import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([
    {id: 1, name: 'William', age: 25},
    {id: 2, name: 'Vietnam', age: 25},
    {id: 3, name: 'SaiGon', age: 25},
  ])

  const name = "William";
  const age = 25;
  const data = {
    name: "William",
    age: 25,
    location: "Helsinki"
  }

  const addNewTodo = (name) => {
    const newTodo = {
      id: todoList.length + 1,
      name: name,
      age: 25
    }
    setTodoList([...todoList, newTodo]);
  }
  
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew 
      addNewTodo = {addNewTodo}
      />
      <TodoData 
        name = {name}
        age = {age}
        data = {data}
        todoList = {todoList}
        
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' alt='logo' />
      </div>
    </div>
  )
}

export default App
