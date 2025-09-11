import ChatMessage from "./ChatMessage"
import useAutoScroll from '../hooks/useAutoScroll';
import "./ChatMessages.css"

export default function ChatMessages({ chatMessages }) {

    const chatMessagesRef = useAutoScroll(chatMessages);

    return (
        <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessages.length === 0 ?
                <p className="welcome-message">Welcome to the chatbot project! Send a message using the textbox below.</p>
                :
                chatMessages.map(chatMessage => <ChatMessage message={chatMessage.message} sender={chatMessage.sender} key={chatMessage.id} />)
            }
        </div>
    )
}