import Header from './Component/Header';
import Add from './Component/Add';
import WatcheList from './Component/WatcheList';
import Watched from './Component/Watched';
import { Container } from "./styles/styleC"
import { Route, Routes } from 'react-router-dom';
import { GProvider } from './context/Gstate';
import MovieDetail from './Component/MovieDetail';



function App() {

  return (
    <GProvider>
      <Container>
        <Header />

        <Routes>

          <Route index path='/' element={<WatcheList />} />
          <Route path='/Watched' element={<Watched />} />
          <Route path='/Add' element={<Add />} />
          <Route path='/detail' element={<MovieDetail />} />
        </Routes>
      </Container>
    </GProvider>
  )
}

export default App
