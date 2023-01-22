import React from 'react'
import { NavC,LinkI,Links,Logo,Button } from '../styles/styleC'

const Header = () => {
  return (
   
      <NavC>
        <Logo>
          Movie App
        </Logo>
         <Links>
            <LinkI> movies</LinkI>
            <LinkI> series</LinkI>
            <Button> add </Button>
         </Links>
      </NavC>
  )
}

export default Header
