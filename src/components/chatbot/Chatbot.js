import React, { useState, useRef, useEffect } from 'react';
import { Message } from './Message';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import SendIcon from '@mui/icons-material/Send';
import handleChatResponse from './ChatGPT';
import { storeConvo } from '../../firebase/storage';

export function Chatbot(props) {
    const messages = [
        {sender: "default", message: "Hello, I am JoeBot. Joe created me so I can answer any questions you have about Joe! How can I help you?"}
    ]
    const [messageList, setMessageList] = useState(messages);
    const [userInput, setUserInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef();

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        if(messageList.length > 1 && messageList.length % 2 === 1){
            storeConvo(messageList);
        }
      }, [messageList]);

    const containerStyle = {
        height: props.isMobile ? "400px" : "550px", 
        width: props.isMobile ? "300px" : "350px", 
        backgroundColor:'#f3f6fc', 
        borderRadius: "10px",
        position:"fixed", 
        bottom: props.isMobile ? "75px" : "100px", 
        right: props.isMobile ? "10px" : "15px",
        display: 'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    };

    const headerContainerStyle = { 
        height: props.isMobile ? "40px" : "75px",
        backgroundColor:'white', 
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        borderBottom: '1px solid light-grey',
        display: "flex",
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:'20px',
        fontSize: props.isMobile ? "17px" : "23px",
        color: "black"
    }

    const messageContainerStyle = {
        display: "flex",
        flexDirection:'column',
        justifyContent:'start',
        flex: 1,
        padding:"10px",
        overflow: 'scroll'
    }

    const inputContainerStyle = { 
        display: "flex",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'15px'
    }

    const addMessageToList = (newMessage) => {
        setMessageList((messages) => [...messages, newMessage]);
    }

    const onKeyDown = (event) => {
        if(event.key === 'Enter' || event.keyCode === 13){
            event.preventDefault();
            onChatSent(userInput);
        }
    }

    const onChatSent = () => {
        handleChatResponse(userInput, messageList, addMessageToList, setIsTyping);
        setUserInput("");
    }

    return (
        <div style={containerStyle}>
            <div style={headerContainerStyle}>
                <div>JoeBot</div>
            </div>
            <div style={messageContainerStyle}>
                {messageList.map((message) =>
                     <Message sender={message.sender} message={message.message} isMobile={props.isMobile}/>
                )}
                {isTyping &&
                    <Message sender={"assistant"} message={"..."} isMobile={props.isMobile}/>
                }
                <div ref={messagesEndRef} />
            </div>
            <div style={inputContainerStyle}>
                <Textarea 
                    placeholder="Ask something…" 
                    variant="outlined" 
                    color="primary" 
                    maxRows={3}
                    style={{color:'black', fontSize:'14px', flex:'1'}}
                    onChange={(input) => setUserInput(input.target.value)}
                    onKeyDown={onKeyDown}
                    value={userInput}
                />
                <Button 
                    variant='plain'
                    style={{padding:"5px", marginLeft:"5px"}} 
                    disabled={isTyping || !userInput}
                    onClick={() => onChatSent(userInput)}
                >
                    <SendIcon/>
                </Button>
            </div>
        </div>
    );
}
