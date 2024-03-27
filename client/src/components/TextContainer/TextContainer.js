import React from 'react';

import './TextContainer.css';

const TextContainer = ({ users }) => (
    <div className="textContainer">
        <div>
            <h1>Chat App</h1>
            <h2>Made with Express.js, React.js, Node.js and Socket.IO</h2>
        </div>
        { users ?
            <div>
                <h1>People currently online:</h1>
                <div className="activeContainer">
                    <h2>
                        {users.map( ({name}) => (
                            <div key={name} className="activeItem">
                                {name}
                            </div>
                        ))}
                    </h2>
                </div>
            </div>
            : null
        }
    </div>
);

export default TextContainer;