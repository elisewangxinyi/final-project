import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Homepage from './views/Homepage';
import ProjectList from './views/ProjectList';
import Timeline from './views/Timeline';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/home' element={<Homepage />}/>
        <Route path='/projects' element={<ProjectList/>}/>
        <Route path='/timeline' element={<Timeline/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
