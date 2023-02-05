import React ,{useContext} from 'react'
import { Gcontext } from '../context/Gstate'
import {WatcheListContainer,WatchMovie,BoxW} from '../styles/styleC'

const WatcheList = () => {
  const {watchlist}=useContext(Gcontext)
  console.log(watchlist);
  return (
    <WatcheListContainer>
      <h1>my watchlist :</h1>


      <WatchMovie>
       {watchlist.length >0? watchlist.map(movie=>{
        return  <BoxW key={movie.id} >
                
        <img style={{width:300,height:300}}  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
          
        </BoxW>
       }): 'NO MOVIES YET !'}
         

      </WatchMovie>

    
    </WatcheListContainer>
  )
}

export default WatcheList
