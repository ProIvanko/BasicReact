import react, { useEffect } from "react";
import TodoList from "./Todo/TDlist";
import context from "./context";
import Loader from "./Loader";
import React from "react";
import Modal from "./Todo/Modal/Modal.js";

const AddTodo = React.lazy(()=> 
  new Promise(resolve => {
    setTimeout(() => {
      resolve(import('./Todo/AddTodo'))
    }, 3000)
  }))

function App() {
  const [todos, setTodos] = react.useState([])

  const [Loading, setLoading] = react.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() =>{
          setTodos(todos)
          setLoading(false)
        }, 2000)
      })
  }, [] )

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

      <Modal />

      <React.Suspense fallback={<Loader/>}>
          <AddTodo onCreate={addTodo}/> 
      </React.Suspense>

      {Loading && <Loader/>}

      {todos.length ? (
      <TodoList 
      todos={todos} 
      onToggle={toggleTodo}
      />

      ) : Loading ? null : (
          <p>No todos!</p>
      )}
      
    </div>
    </context.Provider>
  )
}

export default App;
