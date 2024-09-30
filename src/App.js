import React from 'react';
import {Grid2, Typography, Box } from '@mui/material';

const App = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 5, lg: 4 }}>
          <Typography>Email subscribe section</Typography>
        </Grid2>
        <Grid2 container spacing={4} size={{ xs: 12, md: 7, lg: 8 }}>
          <Grid2 size={{ xs: 6, lg: 3 }}>
            <Typography>
              <Box
                id="category-a"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category A
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <li>Link 1.1</li>
                <li>Link 1.2</li>
                <li>Link 1.3</li>
              </Box>
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 6, lg: 3 }}>
            <Typography>
              <Box
                id="category-b"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category B
              </Box>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                <li>Link 2.1</li>
                <li>Link 2.2</li>
                <li>Link 2.3</li>
              </Box>
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 6, lg: 3 }}>
            <Typography>
              <Box
                id="category-c"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category C
              </Box>
              <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                <li>Link 3.1</li>
                <li>Link 3.2</li>
                <li>Link 3.3</li>
              </Box>
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 6, lg: 3 }}>
            <Typography>
              <Box
                id="category-d"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category D
              </Box>
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
                <li>Link 4.1</li>
                <li>Link 4.2</li>
                <li>Link 4.3</li>
              </Box>
            </Typography>
          </Grid2>
        </Grid2>
        <Grid2
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}
          size={12}
        >
          <Grid2 sx={{ order: { xs: 2, sm: 1 } }}>
            <Typography>© Copyright</Typography>
          </Grid2>
          <Grid2 container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid2>
              <Typography>Link A</Typography>
            </Grid2>
            <Grid2>
              <Typography>Link B</Typography>
            </Grid2>
            <Grid2>
              <Typography>Link C</Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
    );
};

export default App;
