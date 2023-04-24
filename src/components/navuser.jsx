import './navuser.css';
import {  Link } from "react-router-dom";
function Navuser(){

    return(
        <>
        <ul className='menu-bar'>
        <li className='menu-item'><Link to ="/dashboard">  Hello you</Link></li>
        <li className='menu-item'><Link to ="/happyday">Happy days </Link></li> 

        <li className='menu-item'><Link to = " /grow">You Growth</Link></li>
        <li className='menu-item'><Link to ="/confused">Confused</Link></li>
        <li className='menu-item'><Link to = "/shittyday">Shitty days</Link></li>
        <li className='menu-item'><Link to ="/">Logout</Link></li>

            
        </ul>
        

        
        
        </>
    )
}

export default Navuser;