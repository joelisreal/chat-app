import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';

let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:8000';   
    const location = useLocation(); 

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);
        console.log(socket);
        console.log(name, room);
        console.log(location.search);
        console.log(window.location.search);
        socket.emit('join', { name, room }, ( ) => {
            // alert(error);
            // console.log(error);
        });

        return () => {
            // socket.emit('disconnect');
            socket.disconnect();
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, [messages]
    );

    // function for sending messages
    const sendMessage = (event) => {
        event.preventDefault();
        console.log(45)
        console.log(message)
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(45, message, messages)
    
    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
                {/* <TextContainer users={users} /> */}
                {/* <input 
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyDown={event => event.key === 'Enter' ? sendMessage(event) : null}
                /> */}
            </div>
            <TextContainer users={users} />
        </div>
    );
}

export default Chat;