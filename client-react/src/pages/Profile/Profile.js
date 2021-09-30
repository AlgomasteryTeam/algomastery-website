import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Profile = () => {
  return (
    <div>
      <h3>Profile</h3>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Tommy Vercetti
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            @tommy
          </Typography>

          <Box sx={{ width: '100%', maxWidth: 345, bgcolor: 'background.paper' }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="hi@tommy.com" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LinkedInIcon />
                  </ListItemIcon>
                  <ListItemText primary="Iamtommy" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>

        </CardContent>
        <CardActions>
          <Button size="small">Edit Profile</Button>
        </CardActions>
      </Card>
    </div >
  );
}

export default Profile