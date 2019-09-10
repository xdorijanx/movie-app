import React, { Component } from 'react'
import Layout from '../../components/Layout/Layout'
export default class MovieContainer extends Component {
    state = {
        moviesData: null,
        loading: true
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&page=1`)
            .then(res => res.json())
            .then(res => this.setState({
                moviesData: res.results,
                loading: false
            }))
    }
    render() {
        return (
            <div>
                <Layout data = {this.state.moviesData} loading={this.state.loading}/>
            </div>
        )
    }
}
