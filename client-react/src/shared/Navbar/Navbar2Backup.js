import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchCourses from '../../components/SearchCourses/SearchCourses'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: 'white' }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Link className="react-link-topbar" to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
              className="app-title"
            >
              Algomastery
            </Typography>
          </Link>
          {/* <SearchCourses /> */}
          <Link className="react-link-topbar" to="/login">
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
