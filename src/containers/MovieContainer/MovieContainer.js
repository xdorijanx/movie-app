import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
export default class MovieContainer extends Component {
  state = {
    moviesData: null,
    loading: true,
    page: 1
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&page=${this.state.page}`
    )
      .then(res => res.json())
      .then(res =>
        this.setState({
          moviesData: res.results,
          loading: false
        })
      );
  }
  fetchMoreMovies = (oldMoviesData) => {
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
       }
   }
  

  loadMoreMovies = () => {
      
    const oldMoviesData = [...this.state.moviesData];
    this.setState(
      prevState => {
        return {
          page: prevState.page + 1,
          loading: true
        };
      },
      this.fetchMoreMovies(oldMoviesData)
    );
  };
  render() {
    return (
      <div>
        <Layout
          data={this.state.moviesData}
          loading={this.state.loading}
          loadMoreMovies={this.loadMoreMovies}
        />
      </div>
    );
  }
}
