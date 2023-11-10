import * as React from 'react';
import { styled, CSSObject, Theme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import * as bg1 from '../demo-9-banner-bg.png'
import linksArray from './linksArray';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



export default function PrimarySearchAppBar(props: { open: boolean, handleDrawerOpen: () => void }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [showDrawer, setShowDrawer] = React.useState(false);
  let scrollPos = 0;
  let screenH = window.innerHeight;

  const handleScroll = () => {
    scrollPos = window.scrollY;
    screenH = window.innerHeight;
    console.log(scrollPos);
    if (scrollPos > screenH) {
      setShowDrawer(true);
    } else {
      setShowDrawer(false);
    }
  };

  // add the event listener for scroll to the window
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        open={isMenuOpen}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          // if the scroll position is greater than the screen height, then set the background color to default and remove the box shadow
          // else set the background color to transparent and add the box shadow
          bgcolor: 'transparent',
          backgroundImage: !showDrawer ? 'none' : `url(${bg1.default}) `,
          boxShadow: showDrawer ? 3 : 0,
          //animate all the children and background image
          '& > *': {
            animation: 'fade-in 2s ease-in-out forwards',
          },
          animation: 'fade-in 2s ease-in-out forwards',
          '& > *:nth-child(2)': {
            animationDelay: '0.1s',
          },
        }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { fontSize: '2rem', fontWeight:'bold', } }}
          >
            LANDING
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{
            display: {
              xs: 'none', md: 'flex',
              fontSize: '1.2rem',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: { xs: 'auto', md: '80x' },
              width: { xs: 'auto', md: '50vw', lg: '40vw' },
            }
          }}>
            {/* nav links */}
            {
              linksArray.map(item => (<Link href={`#${item}`} underline="none" sx={{ color: 'white', mr: 2 }}>{item}</Link>))
            }
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={props.handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
