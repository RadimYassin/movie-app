import React ,{useContext} from 'react'
import { Gcontext } from '../context/Gstate'
import {WatcheListContainer,WatchMovie,BoxW,ButtonDelete} from '../styles/styleC'

const WatcheList = () => {
  const {watchlist,deleteFromWatchlist}=useContext(Gcontext)
  return (
    <WatcheListContainer>
      <h1 style={{padding:"20px",fontSize:'40px',color:"rgb(162, 162, 160)"}}>my watchlist :</h1>


      <WatchMovie>
       {watchlist.length >0? watchlist.map(movie=>{
        return  <BoxW key={movie.id} >
                      <img style={{width:300,height:300}}  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                       <ButtonDelete onClick={()=>deleteFromWatchlist(movie.id)}>Remove</ButtonDelete>
          
                 </BoxW>
       }): 'NO MOVIES YET !'}
         

      </WatchMovie>

    
    </WatcheListContainer>
  )
}

export default WatcheList
