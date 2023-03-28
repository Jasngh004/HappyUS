import './dashbody.css';

function Body(){
    return(
        <>
        <div className='dbody'>

         <div className='dbox'>
         <h2 className='dtitle'>Connect your 🎧, playing to cheer you up</h2>
        <div className='dcontent'>
   
        <iframe
          title="Spotify Embed: Recommendation Playlist "
       src={`https://open.spotify.com/embed/playlist/5wGtpLI79pLzsJOsVh63xq?utm_source=generator&theme=0`}
       width="100%"
       height="100%"
       style={{ minHeight: '360px' }}
       frameBorder="0"
       allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
       loading="lazy"
/>
        </div>
        </div>
        
        <div className='dbox'>
        <h1 className='dtitle'>Your 😊 must worth good food </h1>
        <div className='dcontent'>
        <iframe 
  src={"https://www.edamam.com/results/recipe/?recipe=garlic-paneer-recipe-|-easy-paneer-recipes-recipes-9977156190277dd195eae7d839af234d/search=paneer"}
  width="100%"
  height="100%"
  style={ { minHeight: '360px' }}
  frameBorder="0"
  
  loading="lazy"
  >
    
  </iframe>
        </div>
        </div>

        </div>

        <div className='dbody'>

<div className='dbox'>
<h2 className='dtitle'>Binge random stuff 📺</h2>
<div className='dcontent'>
<iframe 
  src={"https://www.youtube.com/embed/SVY8I46dkb0"}
  width="100%"
  height="100%"
  style={ { minHeight: '360px' }}
  frameBorder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
  >
    
  </iframe>
</div>
</div>

<div className='dbox'>
<h1 className='dtitle'>Go Rockstar Hit Club💃🕺</h1>
<div className='dcontent'>
<iframe 
  src={"https://www.namasteindiatrip.com/blog/best-night-clubs-in-delhi/"}
  width="100%"
  height="100%"
  style={ { minHeight: '360px' }}
  frameBorder="0"
 
  loading="lazy"
  >
    
  </iframe>

</div>
</div>

</div>


<div className='dbody'>

<div className='dbox'>
<h2 className='dtitle'>Need a break? Plan a trip 🛫</h2>
<div className='dcontent'>
<iframe 
  src={"https://www.namasteindiatrip.com/international-tours"}
  width="100%"
  height="100%"
  style={ { minHeight: '360px' }}
  frameBorder="0"
  
  loading="lazy"
  >
    
  </iframe>
</div>
</div>

<div className='dbox'>
<h1 className='dtitle'>Ok all this is boring? search your own💁</h1>
<div className='dcontent'>
<iframe 
  src={"https://www.google.com/search?igu=1"}
  width="100%"
  height="100%"
  style={ { minHeight: '360px' }}
  frameBorder="0"
  
  loading="lazy"
  >
    
  </iframe>
</div>
</div>

</div>


        

        </>
    )
}

export default Body;