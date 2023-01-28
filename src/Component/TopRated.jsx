import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

function TopRated() {


  const url=`https://api.themoviedb.org/3/movie/top_rated?api_key=8bb482f2f727dd736af358131fd13dab&language=en-US&page=1`


  useEffect(()=>{
   axios.get(url).then(res=>console.log(res.data))
  },[])
  return (
    <div>
      HELLO
    </div>
  )
}

export default TopRated
