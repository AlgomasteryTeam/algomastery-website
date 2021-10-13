import * as React from 'react';
import { useState } from 'react'
import { Document, Page } from 'react-pdf';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckIcon from '@mui/icons-material/Check';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import DescriptionIcon from '@mui/icons-material/Description';
import document from '../../components/CourseContentsEnrolled/doc.pdf'
import Vimeo from '@u-wave/react-vimeo';
import PDFViewer from 'pdf-viewer-reactjs'
import BasicTabs from '../../containers/Tab/Tab'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Comments from '../Comments/Comments'
import TextEditor from '../TextEditor/TextEditor'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const CourseContentsEnrolled = ({ content }) => {

  const [value, setValue] = React.useState(0);

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };
  const [expanded, setExpanded] = useState('panel1')
  const [lectureLink, setLectureLink] = useState('228071975')
  const [documentLink, setDocumentLink] = useState('https://arxiv.org/pdf/quant-ph/0410100.pdf')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const playLectureVideo = (lectureVideoLink) => {
    setLectureLink(lectureVideoLink)
  }

  const viewLectureDocuments = (lectureDocumentLink) => {
    setDocumentLink(lectureDocumentLink)
  }

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value}
            onChange={handleChangeTabs}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example">
            <Tab label="Course Contents" {...a11yProps(0)} />
            <Tab label="Q&A" {...a11yProps(1)} />
            <Tab label="Certificate" {...a11yProps(2)} />
            {/* <Tab label="Practise" {...a11yProps(3)} /> */}
            <Tab label="Overview" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <h3>Course Contents</h3>
          <Vimeo
            video={lectureLink}
          />

          {content.sections.map((section, index) => {
            return (
              <>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>{section.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <List>
                        {section.topics.map((topic, index) => {
                          return (
                            <ListItem disablePadding onClick={topic.isVideo ? () => playLectureVideo(topic.view) : () => viewLectureDocuments(topic.view)}>
                              <ListItemButton>
                                <ListItemIcon>
                                  {topic.isVideo ? <OndemandVideoIcon /> : <DescriptionIcon />}
                                </ListItemIcon>
                                <ListItemText primary={topic.title} secondary={topic.subtitle} />
                              </ListItemButton>
                            </ListItem>
                          )
                        })}
                      </List>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            )
          })}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Q&A
          <Comments />
          <TextEditor />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Certificate
        </TabPanel>
        {/* <TabPanel value={value} index={3}>
          Practise
        </TabPanel> */}
        <TabPanel value={value} index={4}>
          Overview
        </TabPanel>

      </Box>



    </div>
  );
}

export default CourseContentsEnrolled