import { useSelector } from 'react-redux';
import * as constants from '../../constants';

export function Skills(props) {
    const theme = useSelector(state => state.theme);

    const skillsStyle = {
        display:'flex', 
        flexWrap: 'wrap', 
        justifyContent:'space-between',
    };
    const skillCategoryStyle = {
        paddingTop: '2rem',
        paddingRight: '2rem'
    }

    return (
        <div ref={props.sectionRef} style={{paddingTop:'100px', marginLeft:'-70px'}}>
            <h2>Skills</h2>
            <div style={skillsStyle}>
                {constants.SKILLS.skills.map((skillCategory) => 
                    <div style={skillCategoryStyle}>
                        <h5 style={{color:theme.colors.secondary, marginBottom: '1rem'}}>{skillCategory.name}</h5>
                        {skillCategory.list.map((skill) => 
                            <h5 style={{marginBottom: '0.2rem'}}>{skill}</h5>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
