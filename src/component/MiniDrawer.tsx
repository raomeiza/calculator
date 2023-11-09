import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Appbar from './Appbar';
import ResponsiveDrawer from './Drawer';

const drawerWidth = 240;



export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));




export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Appbar open={open} handleDrawerOpen={toggleDrawer} />
      <ResponsiveDrawer open={open} toggleDrawer={toggleDrawer} window={document} />
    </Box>
  );
}
