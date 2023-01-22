import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { BoxSearch,InputSearch,BoxAdd } from '../styles/styleC'

const Add = () => {
 const [serch,setSearch]=useState('')
  const OnChange=e=>{
    e.preventDefault()

   setSearch(e.target.value)

    axios.get(`
    https://api.themoviedb.org/3/search/movie?api_key=8bb482f2f727dd736af358131fd13dab&language=en-US&page=1&include_adult=false&query=${e.target.value}`).then(res=>res).then(data=>console.log(data))

  console.log(import.meta.env.VITE_SOME_KEY);

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
    </BoxAdd>
  )
}

export default Add
