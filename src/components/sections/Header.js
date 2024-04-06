import { Button } from '../common/Button';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiMailSend, BiLogoFacebookCircle } from "react-icons/bi";
import * as constants from '../../constants';

export function Header(props) {
    const headerContainerStyle = {
        width:'100%',
        paddingTop:'2rem',
    };
    const headerStyle = {
        display: 'flex',
        flexDirection: 'column',
    };
    const footerStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'flex-end',
        justifyContent: 'space-between',
        width: '9rem',
    };
    return (
        <div style={headerContainerStyle}>
            <div style={headerStyle}>
                <h1 style={{marginBottom: '1rem', fontSize:'35px'}}>
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
                    style={{marginBottom:'2rem'}}
                />
            </div>
            <div style={footerStyle}>
                <a 
                    href={constants.GITHUB_LINK} 
                    target='blank'
                >
                    <AiFillGithub size={30}/>
                </a>
                {/* <a 
                    href={constants.FACEBOOK_LINK} 
                    target='blank'
                >
                    <BiLogoFacebookCircle size={30}/>
                </a> */}
                <a 
                    href={constants.LINKEDIN_LINK} 
                    target='blank'
                >
                    <AiFillLinkedin size={30}/>
                </a>
                <a 
                    href={constants.EMAIL_LINK} 
                    target='blank'
                >
                    <BiMailSend size={30}/>
                </a>
            </div>
        </div>
    );
}
