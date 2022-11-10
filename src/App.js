import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        {/*<Route path='/haiku' element={<Haiku />} />
        <Route path='/kukai' element={<Kukai />} />
        <Route path='/Sensei' elememt={<Sensei />} />
        <Route path='/Community' element={<Community />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
