import dayjs from 'dayjs';
import { useState } from 'react'
import { Chatbot } from "supersimpledev"
import LoadingSpinner from "../assets/loading-spinner.gif"
import "./ChatInput.css"

export default function ChatInput({ chatMessages, setChatMessages,  }) {

    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const saveInputText = (e) => {
        setInputText(e.target.value)
    }

    const enterKey = (e) => {
        e.key === "Enter" && sendMessage();
        e.key === "Escape" && setInputText("");
    }

    const sendMessage = async () => {

        setIsLoading(true);

        if (inputText !== "" && !isLoading) {
            setInputText("")

            const newChatMessages = [
                ...chatMessages,
                {
                    message: inputText,
                    sender: "user",
                    id: crypto.randomUUID(),
                    time: dayjs().valueOf()
                }
            ]

            setChatMessages(newChatMessages);

            setChatMessages([
                ...newChatMessages,
                {
                    message: <img className="loading-icon" src={LoadingSpinner} />,
                    sender: "robot",
                    id: crypto.randomUUID()
                },
            ]);

            const response = await Chatbot.getResponseAsync(inputText);

            setChatMessages([
                ...newChatMessages,
                {
                    message: response,
                    sender: "robot",
                    id: crypto.randomUUID(),
                    time: dayjs().valueOf()
                }
            ]);
        }
        setIsLoading(false);
    }

    const clearMessages = () => {
        setChatMessages([])
    }


    return (
        <div className="chat-input-container">
            <input
                className="chat-input"
                placeholder="Send a message to Chatbot"
                size="30"
                onChange={saveInputText}
                onKeyDown={isLoading ? "" : enterKey}
                value={inputText} />
            <button className="send-button" onClick={sendMessage}>Send</button>
            <button className="clear-button" onClick={clearMessages}>Clear</button>
        </div>
    )
}