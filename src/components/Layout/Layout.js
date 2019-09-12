import React from 'react'
import MovieList from '../MovieList/MovieList'
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup'
import MovieModal from '../../components/MovieModal/MovieModal'
const Layout = ({ data, loading,loadMoreMovies, toggleModal, open, genre, handleGenreChange, searchByGenre}) => {
    return (
        <div>
            <MovieList data={data} />
            <ButtonGroup loadMoreMovies={loadMoreMovies} loading={loading} toggleModal={toggleModal} />
            <MovieModal open={open} toggleModal={toggleModal} genre={genre} handleGenreChange={handleGenreChange} searchByGenre={searchByGenre}/>
        </div>
    )
}

export default Layout
