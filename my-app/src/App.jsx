import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home';
function App() {
  return (
    <BrowserRouter>
    
    
  <Routes>
    <Route path='/' element={ <Home />}>
     
    </Route>
  </Routes>
    </BrowserRouter>
  )
}

export default App;