import axios from 'axios'
import React from 'react'
import { useEffect,useContext, useState} from 'react'
import { Gcontext } from '../context/Gstate';

import '../styles/style.css';
import MovieTop from './MovieTop';
function TopRated() {
const [topM,setTopM]=useState([])
const {addwatchlist,watchlist} =useContext(Gcontext)

  const url=`https://api.themoviedb.org/3/movie/top_rated?api_key=8bb482f2f727dd736af358131fd13dab&language=en-US&page=1`


  useEffect(()=>{
   axios.get(url).then(res=>setTopM(res.data.results))
  },[])

  return (
    <div className='movies'>
          
            <div className="movies-container">
            <h1>top ({topM.length}) movies:</h1>
            <hr />
            <div className='movies-result'>
                  <ul className='list-movies'>
                         {
                          topM.map((movie,index)=>{
                            return   <MovieTop  key={index} movie={movie} index={index} watchlist={watchlist} addwatchlist={addwatchlist}/>
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
