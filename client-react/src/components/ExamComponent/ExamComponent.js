import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const ExamComponent = () => {

  const [questionData, setQuestionData] = useState([])
  const [correctOption, setCorrectOption] = useState(null)
  const [isSelected, setIsSelected] = useState(false)

  const handleExamSubmit = () => {
    console.log('Correct option is: ' + correctOption)
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 345, bgcolor: 'background.paper' }}>
      <List>
        <ListItem disablePadding style={{ background: '#FFC898' }}>
          <ListItemButton>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Question" secondary="Hint for the question" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={() => { setCorrectOption(0) }} style={{ background: correctOption == 0 ? '#FF9292' : 'white' }} >
          <ListItemButton>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Option 0" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={() => setCorrectOption(1)} style={{ background: correctOption == 1 ? '#FF9292' : 'white' }} >
          <ListItemButton>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Option 1" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={() => setCorrectOption(2)} style={{ background: correctOption == 2 ? '#FF9292' : 'white' }}>
          <ListItemButton>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Option 2" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={() => setCorrectOption(3)} style={{ background: correctOption == 3 ? '#FF9292' : 'white' }}>
          <ListItemButton>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Option 3" />
          </ListItemButton>
        </ListItem>

        <button onClick={handleExamSubmit}>Submit</button>

      </List>
    </Box>
  );
}

export default ExamComponent