import { useEffect, useState, createRef } from 'react';
import { SideBar } from '../sections/SideBar'
import { Header } from '../sections/Header';
import { About } from '../sections/About';
import { Experience } from '../sections/Experience';
import { Projects } from '../sections/Projects';
import { Skills } from '../sections/Skills';
import { ChatbotButton } from '../chatbot/ChatbotButton';
import { Map } from '../sections/Map';

export function ResumePage(props) {
  const [activeSection, setActiveSection] = useState('ABOUT');
  const sectionRefs = {
    about : createRef(),
    experience : createRef(),
    projects : createRef(),
    skills : createRef(),
    map : createRef(),
  };

  const pageStyle = {
    height: '100%',
    width: '100%',
  };
  const sidebarContainerStyle = {
    height: '100%',
    width: '50%',
    position:'fixed',
    top:0,
    left:0,
    display: 'flex',
    justifyContent:'flex-end',
    paddingTop:'5rem',
  };
  const contentContainerStyle = {
    overflow: 'auto',
    paddingLeft: props.isMobile ? '2rem' : '',
    paddingRight: props.isMobile ? '2rem' : '6rem',
    paddingBottom: props.isMobile ? '2rem' : '6rem',
  };

  useEffect(()=>{
    window.onscroll = (e)=> {
      if(sectionRefs.experience.current && sectionRefs.experience.current.getBoundingClientRect().top > 100){
        setActiveSection('ABOUT');
      }else if(sectionRefs.projects.current && sectionRefs.projects.current.getBoundingClientRect().top > 100){
        setActiveSection('EXPERIENCE');
      }else if(sectionRefs.skills.current && sectionRefs.skills.current.getBoundingClientRect().top > 100){
        setActiveSection('PROJECTS');
      }else if(sectionRefs.map.current && (sectionRefs.map.current.getBoundingClientRect().top > 100 && sectionRefs.map.current.getBoundingClientRect().bottom > window.innerHeight + 5)){
        setActiveSection('SKILLS');
      }else{
        setActiveSection('MAP PROJECT');
      }
    };
  }, [activeSection])

  return (
    <div style={pageStyle}>
      {!props.isMobile &&
        <div style={sidebarContainerStyle} >
          <SideBar sectionRefs={sectionRefs} activeSection={activeSection}/>
        </div>
      }
      <div style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
        {!props.isMobile &&
          <div style={{flex:1}}/>
        }
        <div style={{flex:1, ...contentContainerStyle}} >
          <div style={{maxWidth: props.isMobile ? '' : '40rem', display:'flex', flexDirection:'column', alignItems:'center'}}>
            {props.isMobile &&
              <Header />
            }
            <About sectionRef={sectionRefs.about}/>
            <Experience sectionRef={sectionRefs.experience} isMobile={props.isMobile}/>
            <Projects sectionRef={sectionRefs.projects} isMobile={props.isMobile}/>
            <Skills sectionRef={sectionRefs.skills}/>
            {!props.isMobile &&
              <Map sectionRef={sectionRefs.map}/>
            }
          </div>
        </div>
      </div>
      <ChatbotButton isMobile={props.isMobile}/>
    </div>
  );
}