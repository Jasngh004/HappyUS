import './in.css';

function In(){
    return(
        <>
        <div className='login-box'>
            <h1 className='login-title'>
                "Hello so what takes you here?" <br/>
                "Let's know..." 
            </h1>
            <div className='login-form'>
                <input required='required' placeholder='Email Address'>Email Adderss</input>
                <input required='required' placeholder='Password'>Password</input>

                <button className='login-btn'> Login</button>
                <button className='login-btn'>Signup</button>
            </div>

        </div>
        
         </>
    )
}

export default In;