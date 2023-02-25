import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
      <Route path="/web" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        
      {/* </Route> */}
    </Routes>
  </BrowserRouter>
   
    );
}

export default App;
