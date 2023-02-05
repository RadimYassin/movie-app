import axios from 'axios'
import React from 'react'
import { useEffect,useContext, useState} from 'react'
import { Gcontext } from '../context/Gstate';

import '../styles/style.css';
function TopRated() {
const [topM,setTopM]=useState([])
const {addwatchlist,watchlist} =useContext(Gcontext)
  const url=`https://api.themoviedb.org/3/movie/top_rated?api_key=8bb482f2f727dd736af358131fd13dab&language=en-US&page=1`


  useEffect(()=>{
   axios.get(url).then(res=>setTopM(res.data.results))
  },[])
console.log(topM)
  return (
    <div className='movies'>
          
            <div className="movies-container">
            <h1>top ({topM.length}) movies:</h1>
            <hr />
            <div className='movies-result'>
                  <ul className='list-movies'>
                         {
                          topM.map((movie,index)=>{
                            return    <li key={index} className="movie" >
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
                                                    <button className='add'  onClick={()=>addwatchlist(movie)}>add to wahtchlist</button>
                                                 </div>
                                               
                                        </div>
                                        

                                       </li>
                          }
                            
                            
                            )
                         }
                         
                  </ul>

            </div>
            </div>
    </div>
  )
}

export default TopRated
