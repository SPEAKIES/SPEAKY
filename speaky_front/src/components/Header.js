import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import { blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link, redirect, useNavigate } from 'react-router-dom';
import users, { logout } from '../store/modules/user';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = createTheme({
    palette: {
      primary: {
        main: blue[300],
      },
      secondary: {
        main: '#f44336',
      },
    },
  });
  function logoutUser() {
    dispatch(logout());
    navigate('/login');
  }
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const naviagte = useNavigate();
  const isLeftMenuOpen = Boolean(anchorElNav);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const userdata = useSelector((state) => state.user);

  // (?????????) ?????? ???????????? ?????? ??????
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // (?????????) ????????? ???????????? ????????????
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // (?????????) ????????? ???????????? -> Profile ??????
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // (?????????) ????????? ???????????? -> Profile ??????
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // ????????? ????????? ???????????? -> Profile ??????,??????
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          naviagte('/mypage');
        }}
      >
        Profile
      </MenuItem>
      {/* ????????? ????????? ??? ????????? ?????? ?????? ???????????? ???????????? */}
      <MenuItem onClick={() => logoutUser()}>
        {userdata.isLogin ? 'Logout' : 'Login'}
      </MenuItem>
    </Menu>
  );

  // ????????? ????????? ????????????
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/*  ????????? ????????? ???????????? -> ????????? ????????? */}

      {/* ????????? ????????? ???????????? -> ????????? */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size=""
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        ></IconButton>
        <AccountCircle sx={{ marginLeft: '2.5vw', marginRight: '4vw' }} />
        Profile
      </MenuItem>
    </Menu>
  );

  //   ?????? ?????? ????????? ????????? ????????? ??? (?????????)
  const LeftMobileMenuId = 'primary-search-left-account-menu-mobile';
  const renderLeftMobileMenu = (
    <Menu
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={LeftMobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isLeftMenuOpen}
      onClose={handleCloseNavMenu}
    >
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <MenuItem>
          <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{
              display: { xs: 'block', sm: 'block' },
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <HomeIcon sx={{ marginRight: '3vw' }} />
            Home
          </Typography>
        </MenuItem>
      </Link>

      <Link to="/board" style={{ textDecoration: 'none', color: 'black' }}>
        <MenuItem>
          <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{
              display: { xs: 'block', sm: 'block' },
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AssignmentIcon sx={{ marginRight: '3vw' }} />
            Board
          </Typography>
        </MenuItem>
      </Link>
      <Link to="/tutor" style={{ textDecoration: 'none', color: 'black' }}>
        <MenuItem>
          <Typography
            variant="h7"
            noWrap
            component="div"
            sx={{
              display: { xs: 'block', sm: 'block' },
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CastForEducationIcon sx={{ marginRight: '3vw' }} />
            Study
          </Typography>
        </MenuItem>
      </Link>
      {userdata.isTutor && (
        <Link
          to={`/manage/${userdata.id}`}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <MenuItem>
            <Typography
              variant="h7"
              noWrap
              component="div"
              sx={{
                display: { xs: 'block', sm: 'block' },
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ConnectWithoutContactIcon sx={{ marginRight: '3vw' }} />
              Manage
            </Typography>
          </MenuItem>
        </Link>
      )}
    </Menu>
  );

  // ????????? ????????? ??? ???????????? ?????????
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}></ThemeProvider>
      <AppBar
        position="fixed"
        sx={{ bgcolor: blue[200], paddingTop: '0.3vw', paddingBottom: '0.3vw' }}
      >
        <Toolbar>
          {/* ?????? ???????????? */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            aria-controls={LeftMobileMenuId}
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>

          {/* ?????? */}
          <Box sx={{ paddingRight: '4vw' }}></Box>
          <ChildCareIcon sx={{ display: { md: 'flex' }, mr: 2 }} />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              display: { sm: 'block' },
              paddingRight: '5vw',
            }}
          >
            Speaky
          </Typography>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <MenuItem sx={{ transition: '0.3s', borderRadius: '40px' }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '40px',
                }}
              >
                Home
              </Typography>
            </MenuItem>
          </Link>

          <Box sx={{ paddingRight: '1vw' }}></Box>
          <Link to="/board" style={{ textDecoration: 'none', color: 'white' }}>
            <MenuItem sx={{ transition: '0.3s', borderRadius: '40px' }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Board
              </Typography>
            </MenuItem>
          </Link>

          <Box sx={{ paddingRight: '1vw' }}></Box>
          <Link to="/tutor" style={{ textDecoration: 'none', color: 'white' }}>
            <MenuItem sx={{ transition: '0.3s', borderRadius: '40px' }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Study
              </Typography>
            </MenuItem>
          </Link>
          {console.log(userdata)}
          {userdata.isTutor && (
            <Link
              to={`/manage/${userdata.id}`}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <MenuItem sx={{ transition: '0.3s', borderRadius: '40px' }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    display: { xs: 'none', sm: 'block' },
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  Manage
                </Typography>
              </MenuItem>
            </Link>
          )}

          {/* ????????? ????????? ???????????? ??????(????????? ????????? ?????????) */}
          <Box sx={{ flexGrow: 1 }} />

          {/* ????????? ????????? */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <MailIcon />
              </Badge>
            </IconButton>

            {/* ????????? ????????? */}
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            {/* ????????? ????????? */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>

          {/* ????????? ???????????? */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderLeftMobileMenu}
    </Box>
  );
}
