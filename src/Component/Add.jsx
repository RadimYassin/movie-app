import React from 'react'
import { useState } from 'react'
import { BoxSearch,InputSearch,BoxAdd } from '../styles/styleC'

const Add = () => {
 const [serch,setSearch]=useState('')
  const OnChange=e=>{
    e.preventDefault()

   setSearch(e.target.value)



  console.log(e.target.value);

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
