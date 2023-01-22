import React from 'react'
import { BoxSearch,InputSearch,BoxAdd } from '../styles/styleC'

const Add = () => {
  return (
    <BoxAdd>
      <BoxSearch>
      <InputSearch type='text'
      placeholder='name of film or s'
      />
      </BoxSearch>
    </BoxAdd>
  )
}

export default Add
