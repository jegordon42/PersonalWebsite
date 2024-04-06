import React, { useState } from 'react';

export function Message(props) {
    const messageContainerStyle = {
        display:'flex',
        flexDirection: 'row',
        justifyContent: props.sender === "user" ? 'end' : 'start'
    }

    const messageStyle = { 
        maxWidth:"200px",
        padding:"10px",
        fontSize: props.isMobile ? "12px" : "15px",
        color: "black",
        margin:"5px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
    }

    const userMessageStyle = {
        backgroundColor: "#d3e4fd",
        borderTopLeftRadius: "10px",
        ...messageStyle
    }

    const botMessageStyle = {
        backgroundColor: "white",
        borderTopRightRadius: "10px",
        ...messageStyle
    }



    return (
        <div style={messageContainerStyle}>
            <div style={props.sender === "user" ? userMessageStyle : botMessageStyle}>
                {props.message}
            </div>
        </div>
        
    );
}
