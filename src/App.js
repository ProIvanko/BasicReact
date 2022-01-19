import react from "react";
import TodoList from "./Todo/TDlist";
import context from "./context";



function App() {
  const [todos, setTodos] = react.useState([
    {id:1, completed: false, title: 'Buy bread'},
    {id:2, completed: true, title: 'Buy butter'},
    {id:3, completed: false, title: 'Buy milk'}
  ])

  function toggleTodo(id) {
    setTodos (
      todos.map (todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo =>todo.id !== id))
  }

  return (
    <context.Provider value={{removeTodo}}>
    <div className="wrapper">
      <h1>React tutorial</h1>
      <TodoList 
      todos={todos} 
      onToggle={toggleTodo}
      />
    </div>
    </context.Provider>
  )
}

export default App;
