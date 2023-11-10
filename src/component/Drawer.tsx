import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import linksArray from './linksArray';
import { Link } from '@mui/material';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: { open: boolean, toggleDrawer: any, window: any }) {
  const { window } = props;

  const drawer = (
    <div>
      <Toolbar
        sx={{
          fontSize: '2rem',
          fontWeight: 'bold',
        }}
      >LANDING</Toolbar>
      <Divider />
      <List>
        {linksArray.map((text, index) => (
          <ListItem key={text} disablePadding
            component={Link}
            href={`#${text}`}
            onClick={props.toggleDrawer}
          >
            <ListItemButton selected = {window.location.hash === `#${text}`}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={props.open}
          onClose={props.toggleDrawer}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            // display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          anchor="right"
        >
          {drawer}
        </Drawer>
        
      </Box>
  );
}
