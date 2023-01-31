import React from 'react'
import "./chatList.css"

function ChatList() {

    
  return (
    <div className="main__chatlist">

    <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
    </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className='chatlist__items'>


        </div>
    </div>
  )
}

export default ChatList