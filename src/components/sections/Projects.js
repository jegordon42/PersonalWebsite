import * as constants from '../../constants';
import { Project } from '../common/Project';

export function Projects(props) {
    const sectionStyle = {
        paddingTop: '5rem',
        paddingBottom:'5rem',
        maxWidth: props.isMobile ? '40rem' : ''
    }
    return (
        <div style={sectionStyle} ref={props.sectionRef}>
            {constants.PROJECTS.projects.map((project)=>
                <Project project={project} isMobile={props.isMobile}/>
            )}
        </div>
    );
}
