import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';


export default function Contact(props: { id: string }) {
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
        Contact us
      </Typography>
      <Typography variant="h4" component="div" gutterBottom>
        You can contact us at:
      </Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
      
      }}>
      <Typography variant="h4" component="div" gutterBottom>
        Email: <a href="mailto:raomeiza@gmail.com">mail</a>
      </Typography>
      <Typography variant="h4" component="div" gutterBottom>
        Phone: <a href="tel:+628123456789">+628123456789</a>
      </Typography>
      <Typography variant="h4" component="div" gutterBottom>
      Address: <a href="https://goo.gl/maps/7JYz7Qp7Yp8Y5Z6r9">Jl. Raya Ciputat Parung No. 27, RT.1/RW.1, Ciputat, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15419</a>
      </Typography>
      </Box>

    </Box>
  )
}