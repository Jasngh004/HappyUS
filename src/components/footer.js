import './footer.css';


function Footer(){
    return(
        <>
        <footer>
        <div className='box'>
            <div className='part1'>
                <h2 className='p1-head'>Lets Connect</h2>
                <p className='p1-text'>Happy US is the complete solution for todays stressed generation that comes with the 
                    personal dashboard with music food theme and everything what makes you happy</p>
            </div>
            <div className='part2'>
                <ul className='p2-links'>
                    <li>Home</li>
                    <li>About </li>
                    <li>login/signup</li>
                    <li>Just Smile</li>
                </ul>
            </div>
            <div className='part3'>
                <p >Copyright @2023 <br/> Made with Love <br/> <a className='p3-love' href = "#" target = "blank">Jatin Singh</a></p>
            </div>
            <div className='part4'>
           <img className='handle' src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-logo-abundant-instagram-logo-simple-icon-1.png" alt="mail"></img>
           <img className='handle' src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-logo-abundant-instagram-logo-simple-icon-1.png" alt="github"></img>
           <img className='handle' src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-logo-abundant-instagram-logo-simple-icon-1.png" alt="linkedin"></img>
           <img className='handle' src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-logo-abundant-instagram-logo-simple-icon-1.png" alt="instagram"></img>
           


            </div>
        
        </div>
        </footer>
        </>       
    )
}

export default Footer;