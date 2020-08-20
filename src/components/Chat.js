import React, { useState, useEffect } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'

function Chat() {

    const [ seed, setSeed ] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ....</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>     
                </div>
            </div>
            <div className="chat__body">

                <p className="chat__message">
                <span className="chat__name"> Sonny </span>
                    Chat message
                <span className="chat__timestamp">3:52pm</span>
                </p>

                <p className={`chat__message ${true && 'chat__reciever'}`}>
                <span className="chat__name"> Sonny </span>
                    Chat message
                <span className="chat__timestamp">3:52pm</span>
                </p>
                
            </div>
            <div className="chat__footer">

            </div>
        </div>
    )
}

export default Chat
