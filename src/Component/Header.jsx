import React from 'react'
import { NavC,LinkI,Links,Logo } from '../styles/styleC'

const Header = () => {
  return (
   
      <NavC>
        <Logo>
          MovieBD
        </Logo>
         <Links>
            <LinkI to='/toprated'>TopRated</LinkI>
            <LinkI to='/'> Wahtchlist</LinkI>
            <LinkI to='/add'> search </LinkI>
            
            
         </Links>
      </NavC>
  )
}

export default Header
