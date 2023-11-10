import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';

export default function Team(props: { id: string }) {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      id={props.id}
    >
      <Typography variant="h2" component="div" gutterBottom>
        Team
      </Typography>
    </Box>
  )
}