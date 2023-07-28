"use client"
import React from 'react';
import {Box, Button, TextField} from "@mui/material";

const SearchVideos = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1
        }}>
            <TextField fullWidth variant={'filled'}/>
            <Button variant={'outlined'} fullWidth>Search</Button>
        </Box>
    );
};

export default SearchVideos;