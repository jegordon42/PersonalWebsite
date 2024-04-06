import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {changeTheme} from '../../store/Actions'
import { Tooltip } from "react-tooltip";
import { themes } from '../../themes'

const ThemeOption = (props) => {
    const [hovered, setHovered] = useState(false);
    const dispatch = useDispatch();

    const circleStyle = {
        height: '2rem',
        width: '2rem',
        backgroundColor: hovered ? props.theme.colors.backgroundGradient : props.theme.colors.background,
        borderRadius: '50%',
        display: 'inline-block',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        marginBottom: '0.25rem'
    }
    const tooltipStyle = {
        backgroundColor:props.theme.colors.chip, 
        color: props.theme.colors.backgroundGradient
    }

    const onClick = () => {
        console.log(props.theme)
        dispatch(changeTheme(props.theme));
    }

    return (
        <>
            <Tooltip id={props.theme.id} style={tooltipStyle}>
                <b>{props.theme.name}</b>
            </Tooltip>
            <div 
                data-tooltip-id={props.theme.id}
                data-tooltip-place='right'
                style={circleStyle}
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
                onClick={() => onClick()}
            />
        </>
        
    )
}

export function Themes(props) {
    const selectedTheme = useSelector(state => state.theme);
    
    const containerStyle = {
        borderRadius: '1.5rem',
        marginBottom: props.show ? '' : '-8rem',
        backgroundColor: selectedTheme.colors.primary,
        padding: '0.5rem 0.25rem 0.25rem 0.25rem',
        fontSize: '12px',
        fontWeight: '600',
        transition: "margin 750ms"
    };

    return (
        <div style={containerStyle}>
            {Object.keys(themes).map((themeKey) => {
                const theme = Object.assign({}, themes[themeKey]);
                return (
                    <ThemeOption theme={theme}/>
                )
            })}
        </div>
    );
}
