import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Confused from './pages/Confused';
import HappyDay from './pages/HappyDay';
import ShittyDay from './pages/ShittyDay';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
      <Route path="/web" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/confused" element={<Confused/>} />
        <Route path= "/happyday" element = {<HappyDay/>}/>
        <Route path= "/shittyday" element = {<ShittyDay/>}/>
        
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
   
    );
}

export default App;
