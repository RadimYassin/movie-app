import React from 'react'
import { MovieBOX,Img,Info,Title,Date,InfoC,Text,GroupeBtn, ButtonAdd } from '../styles/styleC'
import {FcFilmReel} from 'react-icons/fc'
const MovieCard = ({movie}) => {
  return (
        <MovieBOX>
                 <Img >
                
                   <img style={{width:300,height:300}}  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                
                   </Img>
                  <Info>
                        <InfoC>
                        <Title> <FcFilmReel/>{movie.title}</Title>
                        <Date>{movie.release_date}</Date>
                        </InfoC>
                        <Text>
                            <span style={{fontSize:20,marginBottom:10}}>Overview:</span>
                        {movie.overview ? movie.overview :"reloading ..."}

                        </Text>
               
                         <GroupeBtn>
                             <ButtonAdd>
                                add 
                             </ButtonAdd>
                             <ButtonAdd>
                               delete
                             </ButtonAdd>
                             
                         </GroupeBtn>
           
                  
                  </Info>

        </MovieBOX>
  )
}

export default MovieCard
