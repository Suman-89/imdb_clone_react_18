import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './compPages/homePage/HomePage';
import MovieList from './component/movielist/MovieList';
import MovieDetail from './compPages/movieDetail/MovieDetail';
import HeaderComp from './component/header/HeaderComp';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComp/>
        <Routes>
          <Route index element={<HomePage/>}></Route>
          <Route path='/movie/:id' element={<MovieDetail/>}></Route>
          <Route path='/movies/:type' element={<MovieList/>}></Route>
          <Route path='/*' element={<h1>Not found !</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
