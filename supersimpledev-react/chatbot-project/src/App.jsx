import { useEffect, useState } from 'react'
import ChatInput from "./components/ChatInput"
import ChatMessages from './components/ChatMessages'
import { Chatbot } from 'supersimpledev'
import './App.css'

function App() {

  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem("messages")) || "");

  useEffect(() => {
    const memory = localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages])


  useEffect(() => {
    const value = Chatbot.addResponses({
      "hola": "Hola Juan!",
      "dame un id único": () => {
        return `Bien. Aquí tienes un ID único: ${crypto.randomUUID()}`;
      }
    });


  }, [])


  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </div>
  );
}

export default App
