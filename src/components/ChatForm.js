import React, { useState } from 'react'
import { useChat } from '../context/ChatContext';
import { send } from './SocketApi';
function ChatForm() {
    const  {setMessages,messages} = useChat()
    const [message,setMessage] = useState("")

    const handlesubmit = (e) => {
        e.preventDefault();
        setMessages([...messages,{messages:message}])
        send(message)
        setMessage("")
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input className='input' value={message} onChange={(e) => setMessage(e.target.value)}/>
        </form>
    </div>
  )
}

export default ChatForm