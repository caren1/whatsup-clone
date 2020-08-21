import React, { useState, useEffect } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom'
import db from '../firebase'
import { useStateValue } from '../StateProvider';
import firebase from '../firebase'

function Chat() {

    const [ seed, setSeed ] = useState('')
    const [ input, setInput ] = useState('')
    const { roomId } = useParams()
    const [ roomName, setRoomName ] = useState('')
    const [ messages, setMessages ] = useState([])
    const [ { user }, dispatch ] = useStateValue()

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId])

    useEffect(() => {
        if(roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))
            db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }
    }, [roomId])

    const sendMessage = (event) => {
        event.preventDefault();
        db.collection('rooms')
          .doc(roomId)
          .collection('messages')
          .add({
            name: user.displayName,
            message: input,
            // timestamp: firebase.firestore.FieldValue.serverTimestamp()
            timestamp: new Date(),
          })
        setInput("");
      };

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
                {messages.map((message) => (
                <p className={`chat__message ${
                    message.name === user.displayName
                    && "chat__reciever"}`}>
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">
                    {new Date(message.timestamp?.toDate()).toUTCString()}
                    </span>
                </p>
                ))}
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
