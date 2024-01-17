"use client";

import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import BoardSelector from './boardselector';

const Navbar = () => {
    return (
        <Toolbar sx={{bgcolor: "#6cd970", position: "static"}}>
            <Box display='flex' flexGrow={1}>
                <img src="/img/cytisum-logo-lg-white.png" width="200" height="80" alt="logo" />
            </Box>
            <BoardSelector />
        </Toolbar>
    )
}

export default Navbar;