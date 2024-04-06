import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export function NavOption(props) {
    const theme = useSelector(state => state.theme);
    const [hovered, setHovered] = useState(false);
    const active = hovered || props.activeSection === props.name;
    const color = active ? theme.colors.secondary : theme.colors.primary;
    const lineWidth = active ? '70px' : '35px';

    const navOptionStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: '10px',
        paddingBottom: '10px',
        cursor: 'pointer'
    };
    const lineStyle = {
        borderTop: '1px solid '  + color,
        width: lineWidth,
        marginRight: '20px',
        transition: 'width 200ms'
    }
    const textStyle = { color }

    return (
        <div 
            style={navOptionStyle} 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onClick={() => props.sectionRef.current.scrollIntoView({behavior: 'smooth'})}
        >
            <div style={lineStyle}/>
            <h4 style={textStyle}>{props.name}</h4>
        </div>
    );
}
