import { useSelector } from 'react-redux';
import * as constants from '../../constants';
import { TimelineEntry } from '../common/TimelineEntry';
import { BsTriangleFill } from "react-icons/bs";

export function Experience(props) {
    const theme = useSelector(state => state.theme);

    const sectionStyle = {
        paddingTop: '5rem',
    };
    const timelineStyle = {
        display: 'grid',
        columnGap: '2rem',
        gridTemplateColumns: props.isMobile ? 'auto 1rem auto' : '12rem 1rem auto'
    }
    
    const lineStyle = {
        borderLeft: '3px solid ' + theme.colors.primary, 
        paddingBottom:'1.5rem'
    }
    
    const topArrowStyle = {
        marginLeft:'-0.7rem', 
        marginTop:'-0.5rem', 
        color:theme.colors.primary
    }
    
    const TimelineTop = () => (
        <>
            <div/>
            <div style={lineStyle}>
                <BsTriangleFill size={20} style={topArrowStyle}/>
            </div>
            <div/>
        </>
    )

    return (
        <div style={sectionStyle} ref={props.sectionRef}>
            <div style={timelineStyle}>
                <TimelineTop/>
                {constants.EXPERIENCE.experiences.map((experience) => 
                    <TimelineEntry experience={experience}/>
                )}
            </div>
        </div>
    );
}
