import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'localhost:8000';   
    // const location = useLocation(); 

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);//, {transports: ['websocket', 'polling', 'flashsocket']});
        setName(name);
        setRoom(room);
        console.log(socket);
        console.log(name, room);
        console.log(location.search);
        console.log(window.location.search);
        socket.emit('join', { name, room }, ({error}) => {
            alert(error);
            console.log(error);
        });
    }, [ENDPOINT, location.search]);
    return (
        <h1>Chat</h1>
    );
}

export default Chat;