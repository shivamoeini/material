import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Home from './components/Home';
import SingIn from './components/SingIn'
function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singin' element={<SingIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;