import { useState } from "react"

export function TodoInput({ handleAddTodo }) {

  const [inputValue, setInputValue] = useState("")

  const handleClick = () => {
    if (!inputValue) { return }
    handleAddTodo(inputValue)
    setInputValue("")
  }



  return (
    <div className="input-container">
      <input placeholder="Add task" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleClick}><i className="fa-solid fa-plus"></i></button>
    </div>
  )
}
