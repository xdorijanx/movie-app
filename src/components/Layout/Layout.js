import React from 'react'
import MovieList from '../MovieList/MovieList'
const Layout = ({ data }) => {
    return (
        <div>
            <MovieList data={data} />
        </div>
    )
}

export default Layout
