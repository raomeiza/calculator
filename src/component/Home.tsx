import * as React from 'react'
import { Container, Typography, Button, Grid, Box } from '@mui/material'
import Appbar from './Appbar'
import MiniDrawer, { DrawerHeader } from './MiniDrawer'
import { UserContext } from '../context/userContext';
import Login from './login';
import SubscriptionPlans from './SubscriptionPlans';
import Dashboard from './Dashboard';

export default function Home() {
  const { user, token } = React.useContext(UserContext);

  return (
    user ? (
    <Container
      sx={{
        width: {sm: '100%', md: '500px'}
      }}
    >
      <MiniDrawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Dashboard />
      <SubscriptionPlans />
      <Typography variant="h2" component="h1" gutterBottom>
        Calculator
      </Typography>
        <DrawerHeader />
          <Button variant="outlined" color="primary" href="/about">
            About
          </Button>
      </Box>
    </Container>
    ) : (
      <Login />
    )      
  )
}
