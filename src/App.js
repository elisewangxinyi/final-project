import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import Homepage from './views/Homepage';
import ProjectList from './views/ProjectList';
import Timeline from './views/Timeline';
import Start from './views/Start';

function App() {

  return (
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/home' element={<Homepage />}/>
          <Route path='/projects' element={<ProjectList/>}/>
          <Route path='/start' element={<Start/>}/>
          <Route path='/timeline' element={<Timeline/>}/>
        </Routes>
      </Router>
    </ParallaxProvider>
    
    
  );
}

export default App;
