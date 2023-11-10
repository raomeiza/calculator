import * as React from 'react'
import MiniDrawer, { DrawerHeader } from './MiniDrawer'
import { UserContext } from '../context/userContext';
import Landing from './landing';
import Box from '@mui/material/Box';
import Products from './products';
import Contact from './contact';
import Team from './team';
import About from './about';

export default function Home() {
  const { user, token } = React.useContext(UserContext);

  return (
    <Box>
      <Landing id='Home'/>
      <Products id='Products'/> 
      <Team id='Team'/>
      <About id='About'/>
      <Contact id='Contact'/>
      <MiniDrawer />
      <Box
        sx={{
          height: '100vh'
        }}
        
      >

      </Box>
    </Box>
  )
}
