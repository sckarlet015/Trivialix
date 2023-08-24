import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import PlayGame from './components/PlayGame/PlayGame';
import PlayClasico from './components/PlayClasico/PlayClasico';
import PlayContraReloj from './components/PlayContraReloj/PlayContraReloj';
import PlayVersus from './components/PlayVersus/PlayVersus';
import Playing from './components/Playing/Playing';
import { useSelector } from 'react-redux';

function App() {
  const genre = useSelector(state => state.selectGenre)
  const difficulty = useSelector(state => state.difficulty)
  const life = useSelector(state => state.lifes)

  console.log(difficulty);
  return (
    <div className="App">
      <NavBar life={life}/>
      <Routes>
        <Route 
          path='/'
          // element={<Landing />}
        />
        <Route 
          path='/carrera'
          element={<PlayClasico genre={genre} difficulty={difficulty}/>}
        />
        <Route 
          path='/casual'
          element={<PlayGame />}
        />
        <Route 
          path='/casual/Play'
          element={<Playing genre={genre} difficulty={difficulty}/>}
        />
        <Route 
          path='/contra'
          element={<PlayContraReloj />}
        />
         <Route 
          path='/versus'
          element={<PlayVersus />}
        />
      </Routes>
    </div>
  );
}

export default App;
