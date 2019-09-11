import React from 'react'
import MovieList from '../MovieList/MovieList'
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup'
const Layout = ({ data, loading,loadMoreMovies}) => {
    return (
        <div>
            <MovieList data={data} />
            <ButtonGroup loadMoreMovies={loadMoreMovies} loading={loading}/>
        </div>
    )
}

export default Layout
