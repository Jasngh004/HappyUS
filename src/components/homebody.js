import './homebody.css'



function HomeBody(){
    return (
        <>
     <div classname="home" >
           <div className='text1'>
             <h1>How was your day today?</h1>
           </div>
           <div className='cards'>

           <div class="carousel__container">
            <div class="carousel-item">
      <img class="carousel-item__img" src="https://img.freepik.com/premium-vector/winking-face-emoji_97458-170.jpg?size=626&ext=jpg" alt="happy" />
      <div class="carousel-item__details">
        <h4 class="carousel-item__details--title">Happiest</h4>
        <h6 class="carousel-item__details--subtitle">I had the best day</h6>
      </div>
    </div>
    <div class="carousel-item">
      <img class="carousel-item__img" src="https://img.freepik.com/premium-vector/smiling-face-emoji_1319-431.jpg?size=338&ext=jpg" alt="good" />
      <div class="carousel-item__details">
        <h4 class="carousel-item__details--title">Good Good</h4>
        <h6 class="carousel-item__details--subtitle">Everything was great today</h6>
      </div>
    </div>
    <div class="carousel-item">
      <img class="carousel-item__img" src="https://img.freepik.com/premium-vector/3d-thinking-emoji-face-with-monocle-3d-emoticon-looking-upwards-with-magnifying-glass_248162-224.jpg?size=338&ext=jpg" alt="passed" />
      <div class="carousel-item__details">
        <h4 class="carousel-item__details--title">Just Survived</h4>
        <h6 class="carousel-item__details--subtitle">Not Good also Not Bad</h6>
      </div>
    </div>
    <div class="carousel-item">
      <img class="carousel-item__img" src="https://img.freepik.com/premium-vector/emoticon-angry-face-icon-yellow-background-colorful-design-vector-illustration_24908-15554.jpg?size=338&ext=jpg" alt="awful" />
      <div class="carousel-item__details">
        <h4 class="carousel-item__details--title">ugh..Awful</h4>
        <h6 class="carousel-item__details--subtitle">why such peeps exist?</h6>
      </div>
    </div>
    <div class="carousel-item">
      <img class="carousel-item__img" src="https://img.freepik.com/premium-vector/sad-emoji-face-illustration_1319-436.jpg?size=338&ext=jpg" alt="sad" />
      <div class="carousel-item__details">
        <h4 class="carousel-item__details--title">Not Good</h4>
        <h6 class="carousel-item__details--subtitle">why always me !!</h6>
      </div>
    </div>
    
    <div class="carousel-item">
    <img class="carousel-item__img" src="https://img.freepik.com/premium-vector/beaming-face-emoji-with-crying-emoticon-big-smile-3d_163786-492.jpg?size=338&ext=jpg" alt="worst" />
      <div class="carousel-item__details">
        <h4 class="carousel-item__details--title">must forgot</h4>
        <h6 class="carousel-item__details--subtitle">please erase this day..please</h6>
      </div>
    </div>
  </div>
           </div>
        </div>
        </>
    )
}

export default HomeBody;