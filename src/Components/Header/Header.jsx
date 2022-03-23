import React from 'react'
import "./Header.scss"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { NotificationsNone, Search, Visibility } from '@mui/icons-material';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);  
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return (
    <div className='header'>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="header__app">
                <Toolbar className='header__bar'>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Мой профиль
                    </Typography>

                        <Search className='header__icon' />
                        <NotificationsNone className='header__icon' />
                        <Visibility className='header__icon' />
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
  )
}

export default Header