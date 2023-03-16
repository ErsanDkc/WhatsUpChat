import React from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import { useEffect } from 'react';
import { init,subscribeChat } from './SocketApi';
import { useChat } from '../context/ChatContext';
function Container() {
  const {setMessages} = useChat();
    useEffect(() => {
        init()
        subscribeChat((message) => {
          setMessages((prevState) => [...prevState, { messages:message}])
        })
    },[])
  return (
    <div className='container'>
        
        <ChatList />
        <ChatForm  />
    </div>
  )
}

export default Container