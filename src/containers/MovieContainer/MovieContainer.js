import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
export default class MovieContainer extends Component {
  state = {
    id: null,
    moviesData: null,
    movieDetails: null,
    loading: true,
    page: 1,
    modalOpen: false,
    randomMovies: false,
    genre: "action",
    allGenre: {
      action: 28,
      adventure: 12,
      animation: 16,
      comedy: 35,
      crime: 80,
      documentary: 99,
      "sci-fi": 878,
      thriller: 53
    }
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&page=${this.state.page}`
    )
      .then(res => res.json())
      .then(res =>
        this.setState(
          {
            moviesData: res.results,
            loading: false
          },
          /*() => {
            fetch(
              `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3`
            )
              .then(res => res.json())
              .then(res => {
                this.setState({ id: res.guest_session_id });
              });
            }
            */
        )
      );
  }
  fetchMoreMovies = oldMoviesData => {
    if (this.state.randomMovies) {
      this.fetchByGenre(oldMoviesData);
    } else {
      return () => {
        fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&page=${this.state.page}`
        )
          .then(res => res.json())
          .then(res =>
            this.setState({
              moviesData: oldMoviesData.concat(res.results),
              loading: false
            })
          );
      };
    }
  };

  loadMoreMovies = () => {
    const oldMoviesData = [...this.state.moviesData];
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
        loading: true
      };
    }, this.fetchMoreMovies(oldMoviesData));
  };

  toggleModal = bool => {
    this.setState({
      modalOpen: bool
    });
  };

  handleGenreChange = e => {
    this.setState({
      genre: e.target.value
    });
  };

  fetchByGenre = oldMoviesData => {
    const genre = [...this.state.genre];
    if (oldMoviesData !== undefined) {
      fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&include_adult=false&include_video=false&page=${
          this.state.page
        }&with_genres=${this.state.allGenre[this.state.genre]}`
      )
        .then(res => res.json())
        .then(res =>
          this.setState({
            moviesData: oldMoviesData.concat(res.results),
            loading: false
          })
        );
    } else {
      return () => {
        fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&include_adult=false&include_video=false&page=${
            this.state.page
          }&with_genres=${this.state.allGenre[this.state.genre]}`
        )
          .then(res => res.json())
          .then(res =>
            this.setState({
              moviesData: res.results,
              loading: false,
              modalOpen: false
            })
          );
      };
    }
  };

  searchByGenre = () => {
    this.setState(
      {
        page: Math.floor(Math.random() * (500 - 1) + 1),
        loading: true,
        randomMovies: true
      },
      this.fetchByGenre()
    );
  };

  fetchMovieDetails = (movieId) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US`)
      .then(res => res.json())
      .then(res => this.setState({
        movieDetails: {
          name: res.original_title,
          image: res.backdrop_path,
          rating: res.vote_average,
          language: res.original_language,
          productionCompanies: res.production_companies,
          overview: res.overview
        }
      }))
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <Layout
          handleGenreChange={this.handleGenreChange}
          genre={this.state.genre}
          data={this.state.moviesData}
          loading={this.state.loading}
          loadMoreMovies={this.loadMoreMovies}
          toggleModal={this.toggleModal}
          open={this.state.modalOpen}
          searchByGenre={this.searchByGenre}
          movieDetails={this.state.movieDetails}
          fetchMovieDetails={this.fetchMovieDetails}
        />
      </div>
    );
  }
}
