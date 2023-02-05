import React from 'react'
import { MovieBOX,Img,Info,Title,Date,InfoC,Text,GroupeBtn, ButtonAdd, LinkI } from '../styles/styleC'
import {FcFilmReel} from 'react-icons/fc'
import { useContext } from 'react'
import { Gcontext } from '../context/Gstate'
const MovieCard = ({movie}) => {

  const {addwatchlist,watchlist} =useContext(Gcontext)
let movieS=watchlist.find(m=>m.id===movie.id)
const Disbled=movieS ? true :false;
  console.log(movieS);
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
                             <ButtonAdd btn disabled={Disbled} onClick={()=>addwatchlist(movie)}>
                                add to wahtchelist
                             </ButtonAdd>
                             
                         </GroupeBtn>
           
                  
                  </Info>

        </MovieBOX>
  )
}

export default MovieCard
