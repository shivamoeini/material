import React from 'react';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './components/Home';
import SingIn from './components/SingIn'
import SingUp from './components/SingUp';




function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singin' element={<SingIn />} />
        <Route path="/singup" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;