import React from "react";
import MovieList from "../MovieList/MovieList";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import MovieModal from "../../components/MovieModal/MovieModal";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
const Layout = ({
  data,
  loading,
  loadMoreMovies,
  toggleModal,
  open,
  genre,
  handleGenreChange,
  searchByGenre,
  fetchMovieDetails,
  movieDetails,
  rateMovie,
  guestSessionId
}) => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <MovieList data={data} fetchMovieDetails={fetchMovieDetails}/>
                <ButtonGroup
                  loadMoreMovies={loadMoreMovies}
                  loading={loading}
                  toggleModal={toggleModal}
                />
                <MovieModal
                  open={open}
                  toggleModal={toggleModal}
                  genre={genre}
                  handleGenreChange={handleGenreChange}
                  searchByGenre={searchByGenre}
                />
              </div>
            )}
          />

          <Route exact path="/:moviename" render={(props) => <MovieDetails {...props}  movieDetails={movieDetails} rateMovie={rateMovie} guestSessionId={guestSessionId}/>} />
            
      
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Layout;
