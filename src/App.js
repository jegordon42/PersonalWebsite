import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ResumePage } from './components/pages/ResumePage';
import { ConvoHistory } from './components/pages/ConvoHistory';

function App() {
  const [appWidth, setAppWidth] = useState(window.innerWidth);
  const isMobile = appWidth < 1025;

  window.onresize = () => {
    setAppWidth(window.innerWidth);
  };

  return (
    <Routes>
      <Route path="/" element={<ResumePage isMobile={isMobile}/>}/>
      <Route path="/convos" element={<ConvoHistory isMobile={isMobile}/>} />
    </Routes>
  );
}

export default App;