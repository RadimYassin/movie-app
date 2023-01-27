import React from 'react'
import { NavC,LinkI,Links,Logo,Button } from '../styles/styleC'

const Header = () => {
  return (
   
      <NavC>
        <Logo>
          MovieBD
        </Logo>
         <Links>
            <LinkI to='/'> Wahtchlist</LinkI>
            <LinkI to='/toprated'> Top Rated</LinkI>
            <Button to='/add'> search </Button>
         </Links>
      </NavC>
  )
}

export default Header
