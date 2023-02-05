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
    background-color:${({btn})=>btn ?'#273679':null };
   &:hover{
    background-color: rgb(28, 132, 187);
    transition: all s ease-in-out;
   }
   @media screen and (max-width:900px ) {
font-size:16px;
padding:2px;

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

    


`


export const MovieBOX=styled.li`
    
    width:100%;
   
    margin-top:10px;
    box-shadow: 1px 1px 17px -6px #505050;
    display:flex;
    gap:20px;
    height:300px;
    @media screen and (max-width:900px ) {
        flex-direction:column;
        height:max-content;
      
    }
`


export const Img=styled.div`
    display:flex;
   
    @media screen and (max-width:900px ) {
       justify-content:center;
       height:300px;
       padding-top:10px;
    }
   
    
`

export const Info=styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:space-evenly;

   
`
export const  InfoC=styled.div`
padding:10px;
display:flex;
justify-content:space-between;
align-items:center;
        @media screen and (max-width:900px ) {
       justify-content:center;
    
       padding-top:10px;
    }
`

export const Title=styled.span`
flex: 1;
display:flex;
gap:10px;
align-items:center;
    font-size:30px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
export const Date=styled.span`
    color:#727272;
    @media screen and (max-width:900px ) {
   display:none;
    }
`


export const Text=styled.p`
    color:#393838;
    padding:5px;
    display:flex;
    flex-direction:column;
    @media screen and (max-width:900px ) {
        text-align:center;
    padding:8px;
    }
   
    
`


export const GroupeBtn=styled.div`
   
    padding:8px;

    display:flex;
    justify-content:space-between;
    
  
`

export const ButtonAdd=styled.button`
    width:150px;
    padding: 8px;
    border-radius:4px;
    color:rgb(255, 255, 255);
    background-color:${({btn})=>btn ? '#f7934b' :'#0467fb'};


   &:disabled{
    background-color:#c8926c;
   }
    @media screen and (max-width:900px ) {
      width:100%;
    }

`


export const WatcheListContainer=styled.section`
    

    width:70%;
    margin:0 auto;
    padding:8px;

`


export const WatchMovie=styled.section`
    
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;

`

export const BoxW=styled.section`
    


    width:300px;

    margin:10px;
    
`


export const ButtonDelete=styled.button`
    

    background-color:#0c58a9;
    width:100%;
    padding:8PX;
    color:white;
    border-radius:5px;
    &:hover{
        background-color:#a90c0c;
    }
`