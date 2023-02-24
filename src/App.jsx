import Header from './Component/Header';
import Add from './Component/Add';
import WatcheList from './Component/WatcheList';
import { Container } from "./styles/styleC"
import { Route, Routes } from 'react-router-dom';
import { GProvider } from './context/Gstate';
import TopRated from './Component/TopRated';
import { useEffect } from 'react';



function App() {


  useEffect(()=>{
    fetch("http://127.0.0.1:5000/").then(res=>res.json()).then(res=>console.log(res))
  },[])

  return (
    <GProvider>
      <Container>
        <Header />

        <Routes>

          <Route index path='/' element={<WatcheList />} />
          <Route path='/toprated' element={<TopRated/>} />
          <Route path='/Add' element={<Add />} />
        
        </Routes>
      </Container>
    </GProvider>
  )
}

export default App
