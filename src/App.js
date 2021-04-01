import "./App.css";
import MyNavBar from "./Components/MyNavBar/MyNavBar";
import MovieList from "./MovieList/MovieList";
import React, { useState } from "react";
import AddMovie from "./Components/AddMovie/AddMovie";
import { BrowserRouter, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import About from "./Components/About/About";
function App() {
    let moviesData = [
        {
            id: 1,
            title: "Titanic",
            description:
                "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
            rate: 5,
        },
        {
            id: 2,
            title: "The Shawshank Redemption",
            description:
                "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            posterUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm",
            rate: 5,
        },
        {
            id: 3,
            title: "The Godfather",
            description:
                "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
            rate: 4,
        },
        {
            id: 4,
            title: "The Dark Knight",
            description:
                "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
            rate: 3,
        },
        {
            id: 5,
            title: "12 Angry Men",
            description:
                "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
            rate: 5,
        },
        {
            id: 6,
            title: "Schindler's List",
            description:
                "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            posterUrl:
                "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
            rate: 5,
        },
        {
            id: 7,
            title: "Pulp Fiction",
            description:
                "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            posterUrl: "https://www.miramax.com/media/assets/Pulp-Fiction1.png",
            rate: 4,
        },
        {
            id: 8,
            title: "The Lord of the Rings: The Return of the King",
            description:
                "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            posterUrl:
                "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
            rate: 3,
        },
    ];

    const [movies, setMovies] = useState(moviesData);
    const [rateSearch, setRateSearch] = useState(0);
    const [titleSearch, setTitleSearch] = useState("");
    const getNewMovie = (newMovie) => {
        setMovies([newMovie]);
    };
    const getRatesearch = (inputRate) => {
        setRateSearch(inputRate);
    };
    const getTitlesearch = (inputTitle) => {
        setTitleSearch(inputTitle);
    };
    return (
        <BrowserRouter>
            <Switch>
                <div className="App">
                    <MyNavBar
                        getRatesearch={getRatesearch}
                        getTitlesearch={getTitlesearch}
                    />
                    <div className="addmovie-btn">
                        <Route exact path="/">
                            <AddMovie getNewMovie={getNewMovie} />
                        </Route>
                    </div>
                    <div className="MovieList">
                        <Route exact path="/">
                            <MovieList
                                moviesData={movies}
                                rateSearch={rateSearch}
                                titleSearch={titleSearch}
                            />
                        </Route>
                    </div>
                </div>
                <Route
                    path="/about/:userId"
                    render={(props) => <About {...props} />}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
