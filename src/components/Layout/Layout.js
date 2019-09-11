import React from 'react'
import MovieList from '../MovieList/MovieList'
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup'
import MovieModal from '../../components/MovieModal/MovieModal'
const Layout = ({ data, loading,loadMoreMovies, toggleModal, open}) => {
    return (
        <div>
            <MovieList data={data} />
            <ButtonGroup loadMoreMovies={loadMoreMovies} loading={loading} toggleModal={toggleModal} />
            <MovieModal open={open} toggleModal={toggleModal} />
        </div>
    )
}

export default Layout
