import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavOption } from '../common/NavOption';
import { Button } from '../common/Button';
import { Themes } from '../common/Themes';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiMailSend, BiLogoFacebookCircle } from "react-icons/bi";
import { Tooltip } from "react-tooltip";
import { BsPalette } from "react-icons/bs";
import * as constants from '../../constants';

export function SideBar(props) {
    const [showThemes, setShowThemes] = useState(false);
    const theme = useSelector(state => state.theme);

    const sidebarContainerStyle = {
        width:'100%',
        paddingBottom: '10rem',
        paddingRight: '5rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    };
    const sidebarContentStyle = {
        height:'100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };
    const headerStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '22rem'
    };
    const themesContainerStyles = {
        display: 'flex',
        flexDirection: 'row',
        flex:1,
        alignItems:'flex-end',
        justifyContent: 'flex-start',
        marginBottom: '-1.75rem',
        marginLeft: '-0.25rem',
        overflow: 'hidden',
    }
    const footerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'flex-end',
        justifyContent: 'space-between',
        width: '9rem',
        marginTop:'2rem'
    };
    const tooltipStyle = {
        backgroundColor:theme.colors.chip, 
        color: theme.colors.backgroundGradient
    }
    

    return (
        <div style={sidebarContainerStyle}>
            <div style={{flex:1, minWidth:'6rem'}}/>
            <div style={sidebarContentStyle}>
                <div style={headerStyle}>
                    <h1 style={{marginBottom: '1rem'}}>
                        {constants.NAME}
                    </h1>
                    <h3>
                        {constants.OCCUPATION}
                    </h3>
                    <p style={{marginBottom: '2rem'}}>
                        {constants.OCCUPATION_DESCRIPTION}
                    </p>
                    <Button 
                        text={"View Resume"} 
                        onClick={()=>window.open(process.env.PUBLIC_URL + '/resume.pdf')}
                        style={{marginBottom:'3rem'}}
                    />
                    <NavOption 
                        name={"ABOUT"} 
                        sectionRef={props.sectionRefs.about} 
                        activeSection={props.activeSection}
                    />
                    <NavOption 
                        name={"EXPERIENCE"} 
                        sectionRef={props.sectionRefs.experience} 
                        activeSection={props.activeSection}
                    />
                    <NavOption 
                        name={"PROJECTS"} 
                        sectionRef={props.sectionRefs.projects} 
                        activeSection={props.activeSection}
                    />
                    <NavOption 
                        name={"SKILLS"} 
                        sectionRef={props.sectionRefs.skills} 
                        activeSection={props.activeSection}
                    />
                    <NavOption 
                        name={"MAP PROJECT"} 
                        sectionRef={props.sectionRefs.map} 
                        activeSection={props.activeSection}
                    />
                </div>
                <div style={themesContainerStyles}>
                    <Themes show={showThemes}/>
                </div>
                <div style={footerStyle}>
                    {/* <Tooltip id="theme" style={tooltipStyle} >
                        <b>Change Theme</b>
                    </Tooltip>
                    <a 
                        data-tooltip-id='theme'
                        data-tooltip-place='bottom'
                        onClick={() => setShowThemes(!showThemes)} 
                        style={{marginRight:'0.5rem', cursor:'pointer'}}
                    >
                        <BsPalette size={35}/>
                    </a> */}
                    <Tooltip id="github" style={tooltipStyle}>
                        <b>Github</b>
                    </Tooltip>
                    <a 
                        data-tooltip-id='github'
                        href={constants.GITHUB_LINK} 
                        target='blank'
                    >
                        <AiFillGithub size={30}/>
                    </a>
                    {/* <Tooltip id="fb" style={tooltipStyle}>
                        <b>Facebook</b>
                    </Tooltip>
                    <a 
                        data-tooltip-id='fb'
                        href={constants.FACEBOOK_LINK} 
                        target='blank'
                    >
                        <BiLogoFacebookCircle size={30}/>
                    </a> */}
                    <Tooltip id="linked" style={tooltipStyle}>
                        <b>LinkedIn</b>
                    </Tooltip>
                    <a 
                        data-tooltip-id='linked'
                        href={constants.LINKEDIN_LINK} 
                        target='blank'
                    >
                        <AiFillLinkedin size={30}/>
                    </a>
                    <Tooltip id="email" style={tooltipStyle}>
                        <b>Email Me!</b>
                    </Tooltip>
                    <a 
                        data-tooltip-id='email'
                        href={constants.EMAIL_LINK} 
                        target='blank'
                    >
                        <BiMailSend size={30}/>
                    </a>
                    
                </div>
            </div>
            <div style={{flex:1, maxWidth:'6rem'}}/>
        </div>
    );
}
