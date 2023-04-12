import './happywrite.css';

function ShittyWrite(){
    return(
        <>
         <div className='happyday'>
     <h1 className='h1'>
              Hello Strong Soul  👋 
            </h1>
    <div className='entry'>
       
        <h2 className='entry-title'> Are you okay, All good na? </h2>
        <div className='name-box'>
        <input  type = "text" required= "required" placeholder='Name the day!'/>
        </div>
        <div className='entry-box'>
        
            <input type = "text" required= "required" placeholder='✍️ OK fuck them or fuck that?'/>
            <button className='entry-btn'>EraseMyDay</button>
        </div>

    </div>
    <h2 className='entry-title'>See you had fought these days well this time too!!</h2>

<div className='past'>
    
    <div className='past-box'>
        <h2 className='past-title'>Backlog</h2>
        <div className='past-content'></div>
    </div>
    <div className='past-box'>
        <h2 className='past-title'>Breakup</h2>
        <div className='past-content'></div>
    </div>
    <div className='past-box'>
        <h2 className='past-title'>Dost se ladai</h2>
        <div className='past-content'></div>
    </div>

</div>

</div>
        </>
    )
}

export default ShittyWrite;