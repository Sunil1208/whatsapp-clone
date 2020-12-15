import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import './Chat.css';
const Chat = () => {
    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton >
                        <SearchOutlinedIcon />
                    </IconButton>

                    <IconButton >
                        <AttachFileIcon />
                    </IconButton>

                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && 'chat_receiver'}`}>
                <span className="chat__name">Sunil</span>
                    Hey Guys
                <span className="chat__timestamp">11:46 AM</span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Verma</span>
                    Hey Guys
                </p>
            </div>

            <div className="chat__footer">
            </div>
        </div>
    )
}

export default Chat
