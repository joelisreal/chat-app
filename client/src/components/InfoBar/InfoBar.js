import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import './InfoBar.css';

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online icon" />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
        {/* <a href="/">X</a> */}
        {/* <a href="/"><img src="https://img.icons8.com/ios/50/000000/delete-sign.png" alt="close icon" /></a> */}
        {/* <a href="/"><img src="https://icons8.com/icon/46/close" alt="close icon" /></a> */}
            <a href="/"><img src={closeIcon} alt="close icon" /></a>
        </div>
    </div>
);

export default InfoBar;