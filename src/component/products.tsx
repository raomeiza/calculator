import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';
import HorizontalLinearStepper from './Stepper';
import CustomizedSteppers from './StepperCustomized';

export default function Products(props: { id: string }) {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
      id={props.id}
    >
      <Typography variant="h2" component="div" gutterBottom>
        Products
      </Typography>
      <Typography variant="h4" component="div" gutterBottom>
        Here are some of our products.
      </Typography>
      <Box sx={{ width: {xs: '100%', sm: '80%', md: '50%' } }} >

      <CustomizedSteppers />
      </Box>
    </Box>
  )
}