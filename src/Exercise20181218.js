/* eslint-disable react/react-in-jsx-scope */

import React from "react";

const comment ={
    date: new Date(),
    text: 'I Like learning React !',
    author: {
        name: 'Hello Kitty',
        ImageUrl: 'http://placekitten.com/g/64/64'
    }
};

function Comment(props){
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                     src={props.authtor.avatarUrl}
                     alt={props.author.name} />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function formatDate(date) {
    return date.toLocaleDateString();
}
