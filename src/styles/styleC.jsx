import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container=styled.section`
    width:80%;
    height:100vh;
    margin: 0 auto;
    border:1px solid blanchedalmond;
    @media screen and (max-width:900px ) {
        width:100%;
  
    }

`

export const NavC=styled.div`
    width:100%;
    height:80px;
    background-color: rgb(36, 113, 154);
    display:flex;
  
    align-items:center;
    justify-content:space-between;
  

`


export const Logo=styled.h3`
  
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size:40px;
    margin-left:10px;
    color:white;
    flex:1;
    @media screen and (max-width:900px ) {
        font-size:30px;
  
    }
`

export const Links=styled.div`

   flex:1;
   display:flex;
   justify-content:center;
   gap:10px;

`
export const LinkI=styled(Link)`
   text-decoration:none;
   color:white;
   font-size:17px;
   
    padding:8px;
    border-radius:5px;

   &:hover{
    background-color: rgb(28, 132, 187);
    transition: all s ease-in-out;
   }
`