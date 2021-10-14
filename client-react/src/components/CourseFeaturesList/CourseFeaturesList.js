import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import HelpIcon from '@mui/icons-material/Help';
import CodeIcon from '@mui/icons-material/Code';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

const CourseFeaturesList = ({
  timeCountInHours,
  numberOfArticles,
  numberOfDownloadedResourses,
  numberOfPractiseSets,
  numberOfCodingExercises,
  accessDurationInDays,
  acessOnWhichDevices,
  isCertificateAvailable
}) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 345, bgcolor: 'background.paper' }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <OndemandVideoIcon style={{ color: '#FF9292' }} />
            </ListItemIcon>
            <ListItemText primary={`${timeCountInHours} hours on-demand videos`} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InsertDriveFileIcon style={{ color: '#FF9292' }} />
            </ListItemIcon>
            <ListItemText primary={`${numberOfArticles} articles`} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CloudDownloadIcon style={{ color: '#FF9292' }} />
            </ListItemIcon>
            <ListItemText primary={`${numberOfDownloadedResourses} downloadable resources`} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HelpIcon style={{ color: '#FF9292' }} />
            </ListItemIcon>
            <ListItemText primary={`${numberOfPractiseSets} practice test`} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CodeIcon style={{ color: '#FF9292' }} />
            </ListItemIcon>
            <ListItemText primary={`${numberOfCodingExercises} coding exercises`} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccessibilityIcon style={{ color: '#FF9292' }} />
            </ListItemIcon>
            <ListItemText primary={`${accessDurationInDays} days access`} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ImportantDevicesIcon style={{ color: '#FF9292' }} />
            </ListItemIcon>
            <ListItemText primary={`Access on ${acessOnWhichDevices}`} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CardMembershipIcon style={{ color: '#FF9292' }} />
            </ListItemIcon>
            <ListItemText primary={isCertificateAvailable ? 'Certificate of completion' : 'No certificate of completion'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default CourseFeaturesList