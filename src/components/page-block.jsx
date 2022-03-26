import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function PageBlock({children, img, padding}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        // flexWrap: 'wrap',
        '& > :not(style)': {
            // m: 1,
            width: '100%',
            height: 'auto',
            margin: 0,
            padding: padding ? padding : 0,
            borderRadius: 0,
            border: '1px solid gray'
        },
      }}
    >
        <Paper elevation={0}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                backgroundImage: img ? `url(${img})` : 'none',
                backgroundSize: 'cover',
            }}
        >
            {children}
        </Paper>
    </Box>
  );
}