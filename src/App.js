import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import Homepage from './views/Homepage';
import ProjectList from './views/ProjectList';
import Timeline from './views/Timeline';

function App() {

  return (
    <ParallaxProvider>
        <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/home' element={<Homepage />}/>
            <Route path='/projects' element={<ProjectList/>}/>
            <Route path='/timeline' element={<Timeline/>}/>
        </Routes>
    </ParallaxProvider>
    
    
  );
}

export default App;
