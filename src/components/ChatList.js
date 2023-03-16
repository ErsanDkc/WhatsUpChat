import React from "react";
import { useChat } from "../context/ChatContext";
import ChatMessage from "./ChatMessage";
function ChatList() {
  const { messages } = useChat();
  
  return (
    <div className="chatList">
      <div>
        {messages.map((item, index) => (
          <ChatMessage key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ChatList;
