import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import './Messages.css';

const Messages = ({ messages, name }) => (
    <div className="messages">
        {messages.map((message, i) => (
            <div key={i}>
                <p className="messageText">{message.user}: {message.text}</p>
            </div>
        ))}
    </div>
);

export default Messages;