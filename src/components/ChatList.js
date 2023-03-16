import {useRef,useEffect} from "react";
import { useChat } from "../context/ChatContext";
import ChatMessage from "./ChatMessage";
function ChatList() {
  const { messages } = useChat();
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  return (
    <div className="chatList">
      <div >
        {messages.map((item, index) => (
          <ChatMessage key={index} item={item} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default ChatList;
