import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container=styled.section`
    width:100%;
    
    margin: 0 auto;
   

`

export const NavC=styled.div`
    width:100%;
    height:80px;
    background-color: rgb(36, 113, 154);
    display:flex;
  justify-content:space-around;
  gap:150px;
    align-items:center;
  

`


export const Logo=styled.h3`
  
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size:40px;
    margin-left:20px;
    color:white;
    @media screen and (max-width:900px ) {
        font-size:20px;
        width:100px;
        text-align:center;

  
    }
`

export const Links=styled.div`

   display:flex;
   justify-content:end;
margin-right:20px;
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

export const Button=styled(Link)`
    border-radius:10px;
    background-color: rgb(16, 114, 189);
    padding:8px 10px;
  
    text-decoration:none;
    font-weight:500;
    font-size:16px;
    color:white;
    border:1px solid rgb(0, 0, 0);
    &:hover{
    background-color: rgb(16, 122, 35);
    transition: all s ease-in-out;
    color:white;
   }


`




export const BoxAdd=styled.div`
    width:100%;



   

`
export const BoxSearch =styled.form`

    padding:20px;
    display:flex;
    align-items:center;
    justify-content:center;
   


`

export const InputSearch =styled.input`
    width:70%;
    padding:10px;
    outline:none;
    margin-top:20PX;
    border-radius:5px;
    


`


export const BoxC=styled.div`
    width:100%;
    margin-top:20px ;
    height:auto;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    
    


`
export const BoxM=styled.ul`

     width:70%;
     height:auto;
    background-color:RED;
    @media screen and (max-width:900px ) {
        width:100%;
  
    }
    


`


export const MovieBOX=styled.li`
    
    width:100%;
    height:300px;
    margin-top:10px;
    box-shadow: 1px 1px 17px -6px #505050;
    display:flex;
    @media screen and (max-width:900px ) {
        flex-direction:column;
  
    }
`


export const Img=styled.div`
    flex:1;
   
    background-color:#797979;
`

export const Info=styled.div`
flex:1;
    background-color:#e8b7b7;
`