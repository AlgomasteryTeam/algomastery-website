import * as React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListItemButton from '@mui/material/ListItemButton';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

import './Navbar.css'

export default function ButtonAppBar() {

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar style={{ background: 'white' }} position="static">
          <Toolbar>

            <Link className="react-link-topbar" to="/">
              <img className="Algomastery-logo-desktop" src="assets/images/AlgomasteryLogo.png" alt="Logo" />
            </Link>

            <Typography className="title-view" href="/home" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className="react-link-topbar" to="/">
                <p className="react-text-topbar">Algomastery</p>
              </Link>
            </Typography>

            <div className="login-link-view">
              <Link className="react-link-login" to="/login">
                <p className="login-text">Login</p>
              </Link>
            </div>

            <div className="login-link-view">
              <Link className="react-link-signup" to="/signup">
                <p className="signup-text">Signup</p>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
