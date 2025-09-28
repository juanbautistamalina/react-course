import { useState } from "react";
import Button from "./components/Button"
import Card, { CardBody } from "./components/Card"
import List from "./components/List"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  // List
  const data = ["Steve Jobs", "Elon Musk", "Jeff Bezos"];
  const [list, setList] = useState(data);

  const addElement = () => {
    setList([...list, "Elemento"])
  }
  
  const removeElement = () => {
    const copyList = [...list];
    copyList.pop();
    setList([...copyList])
  } 
  

  // Button
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(!isLoading)
  }

  return (
    <>
      <Card>
        <CardBody title="Ejercicio básico de botón" text={"haz click en el botón para que cambie el estado"} />
        <Button onClick={handleClick} isLoading={isLoading}>Botón</Button>
      </Card>

      <Card>
        <Button onClick={addElement}>Agregar</Button>
        <Button onClick={removeElement}>Eliminar</Button>
        <List data={list} />
      </Card>
    </>
  )
}

export default App
