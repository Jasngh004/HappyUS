import './happywrite.css'

function HappyWrite(){
    return(
     <>
     <div className='happyday'>
     <h1 className='h1'>
              Hello Happy Soul  👋 
            </h1>
    <div className='entry'>
       
        <h2 className='entry-title'> So, what makes you this happy😊? </h2>
        <div className='name-box'>
        <input  type = "text" required= "required" placeholder='Name the day!'/>
        </div>
        <div className='entry-box'>
        
            <input type = "text" required= "required" placeholder='✍️ OK spill tea?'/>
            <button className='entry-btn'>MarkMyDay</button>
        </div>

    </div>
    <h2 className='entry-title'>That smile suits you wear that often like these days!!</h2>

<div className='past'>
    
    <div className='past-box'>
        <h2 className='past-title'>My Birthday</h2>
        <div className='past-content'></div>
    </div>
    <div className='past-box'>
        <h2 className='past-title'>My Birthday</h2>
        <div className='past-content'></div>
    </div>
    <div className='past-box'>
        <h2 className='past-title'>My Birthday</h2>
        <div className='past-content'></div>
    </div>

</div>

</div>
 
    </>
    )
}

export default HappyWrite;