import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

function MovieDetail() {
  const [detail,setDetail]=useState([])
  const [smilair,setSmilair]=useState([])
  const {id}=useParams();

  let  urld =`https://api.themoviedb.org/3/movie/${id}?api_key=8bb482f2f727dd736af358131fd13dab&language=en-US`
   let urlS=`https://api.themoviedb.org/3/movie/${id}/similar?api_key=8bb482f2f727dd736af358131fd13dab&language=en-US`

  useEffect(()=>{
      axios.get(urld).then(res=>setDetail(res.data))
      axios.get(urlS).then(res=>setSmilair(res.data))
  },[])

  console.log(smilair);
  return (
   
     <h3>dtail</h3>
  )
}

export default MovieDetail
