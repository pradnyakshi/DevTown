import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Home from './Component/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import React from 'react';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
