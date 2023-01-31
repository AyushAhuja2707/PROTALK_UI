import React from 'react'
import ChatContent from '../chatContent/ChatContent'
import ChatList from '../chatList/ChatList'
import UserProfile from '../userProfile/UserProfile'
import "./chatBody.css"

export default function ChatBody() {
  return (
    <div className="main__chatbody">
    <ChatList/>
    <ChatContent/>
    <UserProfile/>

    </div>
  )
}
