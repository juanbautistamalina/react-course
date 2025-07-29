
import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

function App() {

  // const todos = [
  //   { input: "Añadir mi primer tarea", complete: true },
  //   { input: "Correr 21km (pendiente)", complete: false },
  //   { input: "Leer 10 páginas (pendiente)", complete: false },
  //   { input: "Ir al gym (pendiente)", complete: false }
  // ]

  const [todos, setTodos] = useState([
    { input: "Añadir mi primer tarea", complete: true }
  ])

  const [selectedTab, setSelectedTab] = useState("Open");

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(todo) {
    todo.complete = true;
    const newTodoList = [...todos]
    setTodos(newTodoList)
    handleSaveData(newTodoList)

  }

  function handleDeleteTodo(todo) {
    const newTodoList = todos.filter(element => element !== todo)
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) return
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos)
  }, [])

  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo} />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App