import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './component/header/Header';
import HomePage from './compPages/homePage/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<HomePage/>}></Route>
          <Route path='/movie/:id' element={<h1>Movie detail page</h1>}></Route>
          <Route path='/movies/:type' element={<h1>Movie list</h1>}></Route>
          <Route path='/*' element={<h1>Not found !</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
