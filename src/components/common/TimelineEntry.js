import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Chip } from './Chip';
import { BsTriangleFill } from "react-icons/bs";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

export function TimelineEntry(props) {
    const theme = useSelector(state => state.theme);
    const [hovered, setHovered] = useState(false);
    const color = hovered ? theme.colors.timelineActive : theme.colors.timeline;

    const lineStyle = {
        borderLeft: '3px solid ' + theme.colors.primary
    };
    const dateStyle = {
        paddingTop: '1.75rem'
    };
    const containerStyle = {
        width:'100%',
        borderRadius: '1rem',
        marginBottom: '2rem',
        padding: '1rem',
        backgroundColor: color,
    };
    const carrotStyle = {
        color: color,
        transform: 'rotate(270deg) scaleX(2) scaleY(1.5)',
        marginTop: '2rem',
        marginRight: '-0.2rem'
    }
    const circleStyle = {
        height: '3rem',
        width: '3rem',
        backgroundColor: color,
        borderRadius: '50%',
        display: 'inline-block',
        marginLeft:'-1.6rem',
        marginTop: '1rem',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    }
    const chipsStyle = {
        display:'flex',
        flexWrap:'wrap',
        gap: '0.4rem'
    }
    const nameStyle = {
        margin:0,
        color: hovered ? theme.colors.chip : theme.colors.secondary,
    }
    const arrowStyle = {
        marginBottom: hovered ? '0.1rem' : '-0.2rem',
        marginLeft: hovered ? '0.5rem' : '0.2rem',
        transition: 'margin 200ms',
        transform: 'rotate(-45deg)',
    }
    const iconStyle = {
        color: hovered ? theme.colors.chip : theme.colors.secondary,
    }

    return (
        <>
            <div style={dateStyle}>
                <h4 style={{display:'inline-block'}}>{props.experience.date}</h4>
            </div>
            <div style={lineStyle}>
                <div 
                    style={circleStyle} 
                    onMouseEnter={() => setHovered(true)} 
                    onMouseLeave={() => setHovered(false)}
                    onClick={() => window.open(props.experience.link)}
                >
                    {props.experience.type == 'Job' ? 
                        <FaBriefcase size={20} style={iconStyle}/> 
                        : 
                        <FaGraduationCap size={20} style={iconStyle}/>
                    }
                </div>
            </div>
            <div 
                style={{display:'flex', cursor: hovered ? 'pointer' : ''}}
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
                onClick={() => window.open(props.experience.link)}
            >
                <div>
                    <BsTriangleFill style={carrotStyle} size={20}/>   
                </div>
                <div style={containerStyle}>
                    <h3 style={nameStyle}>
                        {props.experience.name}
                        <AiOutlineArrowRight style={arrowStyle} size={16}/>
                    </h3>
                    <h5 style={{margin:0}}>{props.experience.role}</h5>
                    <p>{props.experience.description}</p>
                    <div style={chipsStyle}>
                        {props.experience.skills.map((skill) => 
                            <Chip text={skill}/>
                        )}
                    </div>
                </div>
            </div>
            
        </>
        
    );
}
