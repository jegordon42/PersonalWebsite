import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Chip } from './Chip';
import { AiOutlineArrowRight } from "react-icons/ai";

export function Project(props) {
    const theme = useSelector(state => state.theme);
    const [hovered, setHovered] = useState(false);
    const active = props.project.link && hovered;

    const projectContainerStyle = {
        marginTop:'2rem',
        display:'flex',
        alignItems:'center',
        borderRadius:'1rem',
        backgroundColor: active ? theme.colors.backgroundGradient : '',
        cursor: props.project.link ? 'pointer' : ''
    }
    const chipsStyle = {
        display:'flex',
        flexWrap:'wrap',
        gap: '0.4rem'
    }
    const nameStyle = {
        margin:0,
        color: active ? theme.colors.chip : theme.colors.secondary,
    }
    const arrowStyle = {
        display: props.project.link ? '' : 'none',
        marginBottom: active ? '0.1rem' : '-0.2rem',
        marginLeft: active ? '0.5rem' : '0.2rem',
        transition: 'margin 200ms',
        transform: 'rotate(-45deg)',
    }
    const mobileImageContainerStyle = {
        display:'flex',
        justifyContent: 'center',
    }
    const imageContainerStyle = {
        marginLeft: props.project.align === "right" ? '1rem' : '', 
        marginRight: props.project.align === "left" ? '1rem' : '', 
        ...props.project.imageStyle
    }
    const imageStyle = {
        height:'100%',
        width: '100%',
        marginTop: active ? '-0.5rem' : '',
        transition: 'margin 200ms',
    }

    const onClick = () => {
        if(props.project.link){
            if(props.isMobile || props.project.name != 'JoeLinks'){
                window.open(props.project.link);
            }else{
                var rocket = document.getElementById("JoeLinks");
                rocket.classList.add("fly");
                setTimeout(()=>{
                    window.open(props.project.link);
                    rocket.classList.remove("fly");
                }, 2500);
            }
        }
    }

    return (
        <div 
            style={projectContainerStyle}
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onClick={() => onClick()}
        >
            {!props.isMobile && props.project.align === "left" &&
                <div style={imageContainerStyle} >
                    <img src={props.project.image} alt={props.project.name} style={imageStyle} id={props.project.name}/>
                </div>
            }
            <div style={{width: '100%'}}>
                <h3 style={nameStyle}>
                    {props.project.name}
                    <AiOutlineArrowRight style={arrowStyle} size={16}/>
                </h3>
                <p>
                    {props.project.description.map((section) => {
                        switch(section.type){
                            case 'text':
                                return section.text
                            case 'bold':
                                return (<b style={{color:'white'}}>{section.text}</b>);
                            case 'link':
                                return (
                                    <a href={section.link} target='blank'>
                                        {section.text}
                                    </a>
                                );
                            default:
                                return "Invalid Type";
                        }
                    })}
                </p>
                <div style={chipsStyle}>
                    {props.project.skills.map((skill) => 
                        <Chip text={skill}/>
                    )}
                </div>
                {props.isMobile &&
                    <div style={mobileImageContainerStyle}>
                        <img src={props.project.image} alt={props.project.name} style={props.project.mobileImageStyle} id={props.project.name}/>
                    </div>
                }
            </div>
            {!props.isMobile && props.project.align == "right" &&
                <div style={imageContainerStyle}>
                    <img src={props.project.image} alt={props.project.name} style={imageStyle} id={props.project.name}/>
                </div>
            }
        </div>
    );
}
