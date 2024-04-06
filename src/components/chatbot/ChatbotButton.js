import React, { useState } from 'react';
import { Chatbot } from './Chatbot';
import Fab from '@mui/material/Fab';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CloseIcon from '@mui/icons-material/Close';

export function ChatbotButton(props) {
    const [chatbotOpen, setChatbotOpen] = useState(true);

    const fabStyle = {
        position:"fixed", 
        bottom: props.isMobile ? "10px" : "15px", 
        right: props.isMobile ? "10px" : "15px", 
        padding: props.isMobile ? "0px" : "35px"
    }

    const iconStyle = {
        fontSize: props.isMobile ? "25px" : "40px"
    }

    return (
        <div>
            <div style={{display:chatbotOpen ? '' : 'none'}}>
                <Chatbot isMobile={props.isMobile}/>
            </div>
            <Fab 
                color="primary" 
                onClick={() => setChatbotOpen(!chatbotOpen)}
                style={fabStyle}
            >
                {chatbotOpen &&
                    <CloseIcon style={iconStyle}/>
                }
                {!chatbotOpen &&
                    <QuestionAnswerIcon style={iconStyle}/>
                }
            </Fab>
        </div>
    );
}
