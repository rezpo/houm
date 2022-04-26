import React, {useState, useEffect, Suspense} from 'react';
import { getCards } from "../utils/api";
import { Typography, CircularProgress, Box, TextField, Button } from '@mui/material';
import { containerWrapper, cardsFilterWrapper, cardsFilterInput, errorMessage } from "../components/Styles";
import { useForm } from "react-hook-form";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Styles.scss";

const HeroCard = React.lazy (() => import("../components/HeroCard"));

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [photosToShow, setPhotosToShow] = useState(0);
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        let run = true;
        if(run) {
            storeCards(page);
        }
        return () => run = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page]);
    
    const storeCards = async (initial) => {
        let photosCopy = photos;
        const res = await getCards(initial);

        if(res.length) {
            photosCopy = [...photos, ...res];
        }

        setPhotos(photosCopy);
    }

    const onSubmitFilter = (data) => {
        const { quantity } = data;
        setPhotosToShow(Number(quantity));
    }

    const renderCards = () => {
        const render = photos.map((card, index) => {
            if(photosToShow > 0) {
                if(index < photosToShow) {
                    return (
                        <HeroCard 
                            key={index}
                            title={card.title}
                            imageUrl={card.thumbnailUrl}
                            image={card.url}
                            actionText="Visit"
                        />
                    );
                } else {
                    return null;
                }
            } else {
                return (
                    <HeroCard 
                        key={index}
                        title={card.title}
                        imageUrl={card.thumbnailUrl}
                        image={card.url}
                        actionText="Visit"
                    />
                );
            }
        });

        return <Suspense fallback={<CircularProgress />}>{render}</Suspense>;
    }

    return (
        <Box sx={containerWrapper}>
            <Box sx={cardsFilterWrapper} mb={4}>
                <Typography variant="h4">Add a filter</Typography>
                <form onSubmit={handleSubmit(onSubmitFilter)} className="flex-start">
                    <Box sx={cardsFilterInput}>
                        <TextField 
                            label="How many photos to display"
                            name="quantity"
                            color="primary"
                            size="small"
                            focused={errors.quantity}
                            {...register("quantity", { required: "* This is required" })} />
                        <Typography variant="body2" sx={errorMessage}>{errors && errors.quantity?.message}</Typography>
                    </Box>
                    <Button variant="contained" type="submit">Add filter</Button>
                    {photosToShow > 0 ? <Button variant="text" onClick={() => setPhotosToShow(0)} sx={cardsFilterInput}>Clear filter</Button> : null}
                </form>
            </Box>
            <InfiniteScroll
                className="photos__container"
                dataLength={photos.length}
                next={() => setPage(page + 1)}
                hasMore={true}
                endMessage={<Typography>That's all</Typography>}
            >{renderCards()}</InfiniteScroll>
        </Box>
    );
}

export default Photos;
