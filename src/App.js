import React from 'react';
import {Grid2, Typography } from '@mui/material';

const App = () => {
    return (
        <Grid2 container spacing={2}>
            {/* Prime 3 colonne */}
            <Grid2 item xs={12} sm={3}>
                <Typography variant="body1">HELLO</Typography>
                <Typography variant="body1">Contenuto della colonna 2</Typography>
                <Typography variant="body1">Contenuto della colonna 3</Typography>
            </Grid2>
            {/* 9 colonne per le immagini */}
            <Grid2 item xs={12} sm={3}>
                <img src="../images/Group 3-1.png" alt="Immagine 1" style={{ width: '100%' }} />
            </Grid2>
            <Grid2 item xs={12} sm={3}>
                <img src="immagine2.jpg" alt="Immagine 2" style={{ width: '100%' }} />
            </Grid2>
            <Grid2 item xs={12} sm={3}>
                <img src="immagine3.jpg" alt="Immagine 3" style={{ width: '100%' }} />
            </Grid2>
            <Grid2 item xs={12} sm={3}>
                <img src="immagine4.jpg" alt="Immagine 4" style={{ width: '100%' }} />
            </Grid2>
            <Grid2 item xs={12} sm={3}>
                <img src="immagine5.jpg" alt="Immagine 5" style={{ width: '100%' }} />
            </Grid2>
            <Grid2 item xs={12} sm={3}>
                <img src="immagine6.jpg" alt="Immagine 6" style={{ width: '100%' }} />
            </Grid2>
            <Grid2 item xs={12} sm={3}>
                <img src="immagine7.jpg" alt="Immagine 7" style={{ width: '100%' }} />
            </Grid2>
            <Grid2 item xs={12} sm={3}>
                <img src="immagine8.jpg" alt="Immagine 8" style={{ width: '100%' }} />
            </Grid2>
            <Grid2 item xs={12} sm={3}>
                <img src="immagine9.jpg" alt="Immagine 9" style={{ width: '100%' }} />
            </Grid2>
        </Grid2>
    );
};

export default App;
