import { Container } from '@mui/system';
import Header from '../../components/Header/Header';
import SimpleBottomNavigation from '../../components/MainNav';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Trending from '../Trending/Trending';
import Movies from '../Movies/Movies';
import Series from '../Series/Series';
import Search from '../Search/Search';

function Home() {
  return (
    <>
      <Router>
        <Header />
        <SimpleBottomNavigation />
        <div className="app">
          <Container>
            <Routes>
              <Route path="/" element={<Trending />} exact />
              <Route path="/movies" element={<Movies />} exact />
              <Route path="/series" element={<Series />} exact />
              <Route path="/search" element={<Search />} exact />
              {/* 

               Commented Due to Conduct in Next Release 
              <Route path="/movies/:id" element={<SinglePage type="movie" />} />
              <Route path="/series/:id" element={<SinglePageSeries type="tv" />} />
              <Route path="/movieentry" element={<MovieEntry />} exact />
              <Route path="/displaymovie" element={<DisplayMovie />} exact />
              <Route path="/updatemovie/:id" element={<Updatemovie />} />
              <Route path="/register" element={<Register />} exact />
              <Route path="/login" element={<Login />} exact /> */}
            </Routes>
          </Container>
        </div>
      </Router>
    </>
  );
}

export default Home;
