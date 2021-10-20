import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

export default function Head() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography
                    variant="h5"
                >
                    Hello kitty
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
