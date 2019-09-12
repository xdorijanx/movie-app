import React from "react";
import MovieList from "../MovieList/MovieList";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import MovieModal from "../../components/MovieModal/MovieModal";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import { HashRouter, Route, Link } from "react-router-dom";
const Layout = ({
  data,
  loading,
  loadMoreMovies,
  toggleModal,
  open,
  genre,
  handleGenreChange,
  searchByGenre
}) => {
  return (
    <div>
      <HashRouter>
        <Route exact path="/" render={() => <MovieList data={data} />} />

        <Route
          path="/"
          exact
          render={() => (
            <ButtonGroup
              loadMoreMovies={loadMoreMovies}
              loading={loading}
              toggleModal={toggleModal}
            />
          )}
        />
        <Route
          path="/"
          exact
          render={() => (
            <MovieModal
              open={open}
              toggleModal={toggleModal}
              genre={genre}
              handleGenreChange={handleGenreChange}
              searchByGenre={searchByGenre}
            />
          )}
        />

        <Route path="/:id" exact>
          <MovieDetails />
        </Route>
      </HashRouter>
    </div>
  );
};

export default Layout;
