import React from 'react';
import './Sidenav.css';
const Sidenav = () => {
    return (
        <>
            <div class="sidenav">
                <a href="/"></a>
                <a href="/">Trending</a>
                <a href="/movies">Movies</a>
                <a href="/series">Series</a>
                <a href="/search">Search</a>
                <a href="/movieentry">Add Movie</a>
                <a href="/">Update/Delete Movie</a>
            </div>

        </>
    )
}

export default Sidenav;