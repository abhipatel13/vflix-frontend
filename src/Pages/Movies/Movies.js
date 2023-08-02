import { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import './Movies.css';
import useGenre from "../../hooks/useGenre";
// import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import CustomPagination from "../../components/Pagination/CustomPagination";
import Genres from "../../components/Genres/Genres";
import SinglePage from "../../components/SinglePage/Singlepage";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import SingleCustomContent from "../../components/SingleCustomContent/SingleCustomContent";

const Movies = () => {

    const [loggedin, setLoggedin] = useState(false);
    const navigate = useNavigate();
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [numofPages, setnumofPages] = useState();

    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genresforURL = useGenre(selectedGenres);
    
    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}&with_genres=${genresforURL}`);
        await setContent(data.results);
        await setnumofPages(data.total_pages);

    };
    useEffect(() => {
        fetchTrending();

    }, [page, genresforURL]);

    return (
        <div>
            <span className='pageTitle'>Movies</span>
            <Genres
                type="movie"
                selectedGenres={selectedGenres}
                genres={genres}
                setGenres={setGenres}
                setSelectedGenres={setSelectedGenres}
                setPage={setPage}
            // key = {}
            />
            <div className="trending">{
                content && content.map((c) => <SingleContent
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name}
                    date={c.first_air_date || c.release_date}
                    media_type='movies'
                    vote_average={c.vote_average}
                />)
            }</div>
            <CustomPagination setPage={setPage} numofPages={numofPages} />

            {/* <a>  <Link to="/movies/pages">List</Link></a> */}

        </div>
    )

}

export default Movies;