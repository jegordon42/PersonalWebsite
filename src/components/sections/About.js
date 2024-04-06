import * as constants from '../../constants';

export function About(props) {
    const sectionStyle = {
        paddingTop: '2rem',
    };
    return (
        <div 
            style={sectionStyle} 
            ref={props.sectionRef} 
            dangerouslySetInnerHTML={{__html: constants.ABOUT}}
        />
    );
}
