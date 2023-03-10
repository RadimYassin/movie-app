import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import MovieCard from './MovieCard'
import { BoxSearch,InputSearch,BoxAdd,BoxC,BoxM } from '../styles/styleC'
import { client } from '../axios/Axios'

const Add = () => {
 const [serch,setSearch]=useState('')
 const [movies,setMovies]=useState([])
  const OnChange=e=>{
    e.preventDefault()

   setSearch(e.target.value)
     client.get(`search/movie?api_key=8bb482f2f727dd736af358131fd13dab&language=en-US&page=100&include_adult=false&query=${e.target.value}`)
    .then(res=>res).then(data=>
      {
        if (!data.errors) {
          setMovies(data.data.results)
        }else{
          setMovies([])
        }
      }
      
      )
  }
  return (
    <BoxAdd>

      <BoxSearch>
      <InputSearch 
      value={serch}
      onChange={OnChange}
      type='text'
      placeholder='search of a film'
      />
      </BoxSearch>


      < BoxC>
           <BoxM>
             {
             movies.length>0 && movies.map((item)=>{
              return <MovieCard movie={item} key={item.id}/>
             })
             }
           </BoxM>

      </  BoxC>

    </BoxAdd>
  )
}

export default Add
