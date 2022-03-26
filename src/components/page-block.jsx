import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function PageBlock({children, bgImg, padding}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        '& > :not(style)': {
            width: '100%',
            height: 'auto',
            margin: 0,
            padding: padding ? padding : 0,
            borderRadius: 0,
            borderBottom: '1px solid gray'
        },
      }}
    >
        <Paper elevation={0}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                backgroundImage: bgImg ? `url(${bgImg})` : 'none',
                backgroundSize: 'cover',
            }}
        >
            {children}
        </Paper>
    </Box>
  );
}