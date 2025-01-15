import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import Header from "./layout/header.jsx";
import Footer from "./layout/footer.jsx";




const App = () => {

  const [todoList, setTodoList] = useState([

  ])


  const addNewTodo = (name) => {
    const newTodo = {
        id: randomInterval(1, 1000),
        name: name
    }
    setTodoList([...todoList, newTodo]);
  }

  const removeTodo = (id) => {
      console.log(">>>> removeTodo", id);
    setTodoList(todoList.filter(item => item.id !== id));
  }


  const randomInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  return (
      <>
          <Header />
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew 
      addNewTodo = {addNewTodo}
      />
        {todoList.length > 0 ?
      <TodoData
          todoList = {todoList}
            removeTodo = {removeTodo}
      />
        :
        <div className='todo-image'>
            <img src={reactLogo} className='logo' />
        </div>
        }
    </div>
          <Footer />
     </>
  )
}

export default App
