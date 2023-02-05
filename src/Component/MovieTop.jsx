import React from 'react'

export default function MovieTop({index,movie,addwatchlist,watchlist}) {

let mov=watchlist.find(item=>item.id===movie.id)


console.log(mov)
  return (
    <li  className="movie" >
            <h3>{index+1}</h3>
            <div className="img">
                <img style={{width:300,height:300}}  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className='info'>
                    <div className='info-general'>
                            <h2>{movie.original_title}</h2>
                        <span className='vote'>{movie.vote_average}</span> 
                    </div>
                    <div className='info-overview'>
                        <p>{movie.overview}</p>
                    </div>
                    <div className='groupe-btn'>
                        <button className='add' disabled={mov ? true:false}   onClick={()=>addwatchlist(movie)}>add to wahtchlist</button>
                    </div>
                
            </div>
    

   </li>
  )
}
