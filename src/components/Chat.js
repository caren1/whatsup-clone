import React, { useState, useEffect } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom'
import db from '../firebase'

function Chat() {

    const [ seed, setSeed ] = useState('')
    const [ input, setInput ] = useState('')
    const { roomId } = useParams()
    const [ roomName, setRoomName ] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId])

    useEffect(() => {
        if(roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))
        }
    }, [roomId])

    const sendMessage = (event) => {
        event.preventDefault()
        console.log(input)
        setInput('')
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
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
                    <InsertEmoticonIcon />
                    <form>
                        <input type="text"
                         placeholder="Type a message"
                         onChange={event => setInput(event.target.value)}
                         value={input} />
                        <button onClick={sendMessage} type="submit">Send a message</button>
                    </form>
                    <MicIcon />
            </div>
        </div>
    )
}

export default Chat
