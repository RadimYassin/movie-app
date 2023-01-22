import React from 'react'
import { NavC,LinkI,Links,Logo } from '../styles/styleC'

const Header = () => {
  return (
   
      <NavC>
        <Logo>
          Movie App
        </Logo>
         <Links>
            <LinkI> movies</LinkI>
            <LinkI> series</LinkI>
            <LinkI> add favorite</LinkI>
         </Links>
      </NavC>
  )
}

export default Header
