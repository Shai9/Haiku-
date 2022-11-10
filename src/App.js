import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from './pages/Login'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Login />} />
        <Route path='/login' element={<Signup />} />
        {/* <Route path='/kukai' element={<Kukai />} />
        <Route path='/Sensei' elememt={<Sensei />} />
        <Route path='/Community' element={<Community />} /> */} 
      </Routes>
    </Router>
  );
}

export default App;
