import React from 'react';
import { Card, CardHeader, CardContent, CardActions, CardMedia, Button, Typography, Avatar, Divider, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { cardWrapper, cardTitle, cardText, cardAvatar, cardActionBox, cardIconAction } from "./Styles";

const Herocard = (props) => {
    const {
        title,
        imageUrl,
        image,
        actionText
    } = props;

    return (
        <Box px={1}>
            <Card sx={cardWrapper}>
                <CardHeader 
                    avatar={<Avatar aria-label="recipe" sx={cardAvatar}><Typography variant="h3">{title && title[0].toUpperCase()}</Typography></Avatar>} 
                    title={<Typography sx={cardTitle} align="left" variant="h4">{title}</Typography>}
                />
                <CardMedia component="img" height="194" image={imageUrl} alt={title} />
                <CardContent>
                    <Typography sx={cardText} align="left" variant="body1">Tempor aliqua mollit enim aliquip pariatur. Minim adipisicing cupidatat nisi nisi deserunt eiusmod irure minim minim nisi consequat anim ex labore. Cillum ullamco qui qui quis deserunt ut nostrud dolor irure in laboris consequat.</Typography>
                    <Divider light/>
                    <CardActions>
                        <Button variant="contained" size="small" href={image} target="_blank">{actionText}</Button>
                        <Box ml={2} sx={cardActionBox}>
                            <FavoriteIcon color="action" sx={cardIconAction} />
                            <BookmarkAddIcon color="action" sx={cardIconAction} />
                        </Box>
                    </CardActions>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Herocard;
