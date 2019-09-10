import React from 'react'
import {Card,CardHeader,CardMedia,CardContent,CardActions,Avatar,Typography,Skeleton} from '@material-ui/core'

const MovieListItem = ({name,releaseDate,rating,language,image }) => {
    return (
        <div>
            <Card>
                <CardHeader 
                    avatar={
                        <Avatar aria-label="recipe">
                            {rating}
                        </Avatar>
                    }
                    title={name}
                    subheader={releaseDate}
                />
               
            </Card>
        </div>
    )
}

export default MovieListItem