import React ,{useContext} from 'react'
import { Gcontext } from '../context/Gstate'
import {BoxC,BoxM,Img,Info,InfoC,Text,Title,MovieBOX} from '../styles/styleC'
import {FcFilmReel} from 'react-icons/fc'

const WatcheList = () => {
  const {watchlist}=useContext(Gcontext)
  console.log(watchlist);
  return (
    < BoxC>
      <BoxM>
      <h1> My warch list: </h1>
      {watchlist.map(movie=> <MovieBOX>
                 <Img >
                
                   <img style={{width:300,height:300}}  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                
                   </Img>
                   
                   <Info>
                        <InfoC>
                        <Title> <FcFilmReel/>{movie.title}</Title>
                        <Date>{movie.release_date}</Date>
                        </InfoC>
                      
                  
                  </Info>
                   
                   
                   </MovieBOX>
        
      )}
      </BoxM>

</  BoxC>
  )
}

export default WatcheList
