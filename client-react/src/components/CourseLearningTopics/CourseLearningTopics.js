import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';

const CourseLearningTopics = ({ whatYouWillLearn }) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 345, bgcolor: 'background.paper' }}>
      <h2>What you will learn ?</h2>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary={whatYouWillLearn[0]} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary={whatYouWillLearn[1]} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary={whatYouWillLearn[2]} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary={whatYouWillLearn[3]} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default CourseLearningTopics