import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'

const App = () => {

  const name = "William";
  const age = 25;
  const data = {
    name: "William",
    age: 25,
    location: "Helsinki"
  }

  const addNewTodo = (name) => {
    alert(`New todo added: ${name}`)
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
        
        
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
