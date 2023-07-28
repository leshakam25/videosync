"use client"
import React from 'react';
import Link from "next/link";
import {Box} from "@mui/material";

const Navigation = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>
            <Link href={'/'}>Home</Link>
            <Link href={'/main'}>Search</Link>
        </Box>
    );
};

export default Navigation;