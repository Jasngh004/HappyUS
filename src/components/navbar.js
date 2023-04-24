import './navbar.css';
import {  Link } from "react-router-dom";
function Navbar(){

    return(
        <>
        <ul className='menu-bar'>
           
        <li className='menu-item'><Link to="/">Home </Link></li>
        <li className='menu-item'><Link to="/about">About US</Link></li>
        <li className='menu-item'><Link to ="/term">T&C</Link></li>
        <li className='menu-item'><Link to ="/dashboard">Login</Link></li>
            
        </ul>
        

        
        
        </>
    )
}

export default Navbar;