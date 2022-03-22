import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function PageBlock({children, img}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
            m: 1,
            width: '100%',
            height: '50vh',
            margin: 0,
            borderRadius: 0,
            border: '1px solid gray'
        },
      }}
    >
        <Paper elevation={0} sx={{
            backgroundImage: img ? `url(${img})` : 'none',
            backgroundSize: 'cover',
        }}>
            {children}
        </Paper>
    </Box>
  );
}