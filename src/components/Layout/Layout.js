import React from 'react'
import MovieList from '../MovieList/MovieList'
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup'
const Layout = ({ data }) => {
    return (
        <div>
            <MovieList data={data} />
            <ButtonGroup />
        </div>
    )
}

export default Layout
