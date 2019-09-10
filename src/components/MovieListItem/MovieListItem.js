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
                />
                <CardMedia 
                    image={`https://image.tmdb.org/t/p/w500/${image}`}
                    style={{height: 120}}
                />
               <CardContent>
                   <Typography>
                       {name}
                   </Typography>
                   <Typography>
                       {releaseDate}
                   </Typography>
               </CardContent>
            </Card>
        </div>
    )
}

export default MovieListItem
