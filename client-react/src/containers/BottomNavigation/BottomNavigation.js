import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Comments from '../../components/Comments/Comments'
import CourseList from '../CourseList/CourseList';
import EnrolledCourse from '../../pages/EnrolledCourse/EnrolledCourse';
import Login from '../../pages/Login/Login'
import Pro from '../../pages/Pro/Pro'

const SimpleBottomNavigation = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Courses"
          icon={<RestoreIcon />}
          component={Link}
          to="/courses"
          value="Your courses"
        />
        <BottomNavigationAction
          label="Enrolled"
          icon={<RestoreIcon />}
          component={Link}
          to="/enrolled"
          value="Enrolled"
        />
        <BottomNavigationAction
          label="Pro"
          icon={<RestoreIcon />}
          component={Link}
          to="/pro"
          value="pro"
        />
        <BottomNavigationAction
          label="Login"
          icon={<RestoreIcon />}
          component={Link}
          to="/login"
          value="Login"
        />
      </BottomNavigation>
    </Box>
  );
}

export default SimpleBottomNavigation