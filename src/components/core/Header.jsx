import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {BasicButton} from '../individual/Button';
import { useNavigate } from 'react-router';
import PhoneIcon from '@mui/icons-material/Phone';

const pages = [{name: 'Home', url:'/'},{name: 'FAQs', url: 'medicare-faqs'},{name:'Turning 65', url: 'turning-65'},{name:'Medicare Options', url: 'medicare-options'},{name:'About Us', url: 'about'},{name: 'Contact', url: 'contact'}]

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate()

  const handleNavigate = (url) => {
    navigate(url)
    handleCloseNavMenu()
  }


  return (
    <AppBar position="static" sx={{width: 'auto', backgroundColor: 'var(--red)', mx: 5, my: 1.5, borderRadius: '7.5px'}}>
      <Container maxWidth="xl" disableGutters sx={{paddingLeft: '15px', paddingRight: '15px'}}>
        <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => handleNavigate("/")}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'var(--crimson)',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'var(--text-white)',
              textDecoration: 'none',
              fontSize: '1rem',
              lineHeight: 1.3
            }}
          >
            JMCole <br /> Group
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', lg: 'none', color: 'var(--text-white)',  } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }, '& .MuiList-padding': {paddingTop: 0, paddingBottom: 0}, '& .MuiPaper-root': {borderRadius: '7.5px'}  }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => handleNavigate(page.url)} sx={{color: 'var(--text-white)', backgroundColor: 'var(--red)'}}>
                  <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',  }, justifyContent: 'center', gap: 1.5 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleNavigate(page.url)}
                className='btn-link'
                sx={{ my: 2, color: 'var(--text-white)', display: 'block', lineHeight: 1 }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0,  }}>
            {/* CONTACT BUTTON  */}
            <BasicButton text="Request A Call" icon={<PhoneIcon fontSize='small'/>} />
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
