import axios from 'axios'
import React from 'react'
import { useEffect, useState} from 'react'
import '../styles/style.css';
function TopRated() {
const [topM,setTopM]=useState([])

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
              hhh

            </div>
            </div>
    </div>
  )
}

export default TopRated
