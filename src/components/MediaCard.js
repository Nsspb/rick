import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';

export default function MediaCard() {
    const [mult, setMult] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        if (fetching) {
            console.log('fetching');
            axios
                .get(
                    `https://rickandmortyapi.com/api/character/?page=${currentPage}`
                )
                .then((response) => {
                    setMult([...mult, ...response.data.results]);
                    setCurrentPage((prevState) => prevState + 1);
                })
                .finally(() => setFetching(false));
        }
    }, [fetching]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function () {
            document.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    const scrollHandler = (e) => {
        if (
            e.target.documentElement.scrollHeight -
                (e.target.documentElement.scrollTop + window.innerHeight) <
            500
        ) {
            setFetching(true);
        }
    };
    return (
        <Grid container item xs={12} md={12}>
            {mult.map((item) => {
                return (
                    <Card key={item.id} sx={{ maxWidth: 345, m: '2rem' }}>
                        <CardMedia
                            component='img'
                            height='290'
                            image={item.image}
                            alt='green iguana'
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant='h6'
                                component='div'
                            >
                                {item.name}
                            </Typography>
                            <Typography
                                variant='subtitle2'
                                color='text.secondary'
                            >
                                Gender: {item.gender}
                            </Typography>
                            <Typography
                                variant='subtitle1'
                                color='text.secondary'
                            >
                                Status: {item.status}
                            </Typography>
                        </CardContent>
                    </Card>
                );
            })}
        </Grid>
    );
}
