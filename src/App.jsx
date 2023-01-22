import Header from './Component/Header';
import Add from './Component/Add';
import  WatcheList from './Component/WatcheList';
import Watched from './Component/Watched';
import { Container } from "./styles/styleC"
import { Route ,Routes } from 'react-router-dom';



function App() {

  return (
 <Container>
 <Header/>

  <Routes>
   <Route index path='/' element={<WatcheList/>}/>
   <Route path='/Watched' element={<Watched/>}/>
   <Route path='/Add' element={<Add/>}/>

  </Routes>
 </Container>
  )
}

export default App
