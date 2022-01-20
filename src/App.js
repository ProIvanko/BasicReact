import react from "react";
import TodoList from "./Todo/TDlist";
import context from "./context";
import AddTodo from "./Todo/AddTodo";



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

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed:false
        }
      ])
    )
  }

  return (
    <context.Provider value={{removeTodo}}>
    <div className="wrapper">
      <h1>React tutorial</h1>
      
      <AddTodo onCreate={addTodo}></AddTodo>
      {todos.length ? (
      
      <TodoList 
      todos={todos} 
      onToggle={toggleTodo}
      />
      ) : (
        <p>No todos!</p>
      )}
      
    </div>
    </context.Provider>
  )
}

export default App;
