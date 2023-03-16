import React from "react";

function ChatMessage({ item }) {
  return <div className="singleMessage">{item.messages}</div>;
}

export default ChatMessage;
