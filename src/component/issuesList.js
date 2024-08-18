import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const IssuesList = ({ tasks }) => {

  return (
  <div>
    <ul>
    {tasks.map(task => (
        <li key={task.id}>{task.title}{task.description}</li>
    ))}
</ul>

    </div>
  
     

  );
     

};
export default  IssuesList;