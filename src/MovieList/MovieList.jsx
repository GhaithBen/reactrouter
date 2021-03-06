import React from "react";
import MovieCard from "../Components/MovieCard/MovieCard";
import "./MovieList.css";
import { list } from "../trailer/trailer";
function MovieList({ moviesData, rateSearch, titleSearch }) {
    return (
        <div className="moviesList">
            {moviesData
                .filter(
                    (element) =>
                        element.rate >= rateSearch &&
                        element.title
                            .toLowerCase()
                            .includes(titleSearch.toLowerCase())
                )
                .map((element, i) => (
                    <MovieCard movie={element} key={i} />
                ))}
        </div>
    );
}

export default MovieList;
