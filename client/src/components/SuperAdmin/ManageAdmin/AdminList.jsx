import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React, { useState } from 'react';

const AdminList = () => {
  const [searchValue, setSearchValue] = useState('');
  const list = [
    { schoolName: 'test school', admin: 'test Admin' },
    { schoolName: 'test school', admin: 'test Admin' },
    { schoolName: 'test school', admin: 'test Admin' },
    { schoolName: 'test school', admin: 'test Admin' },
    { schoolName: 'test school', admin: 'test Admin' },
    { schoolName: 'test school', admin: 'test Admin' },
    { schoolName: 'test school', admin: 'test Admin' },
    { schoolName: 'test school', admin: 'test Admin' },
    { schoolName: 'test school', admin: 'test Admin' },
    { schoolName: 'test school', admin: 'test Admin' },
    { schoolName: 'test school', admin: 'test Admin' },
    { schoolName: 'test school', admin: 'test Admin' },
    { schoolName: 'test school', admin: 'test Admin' },
    { schoolName: 'test school', admin: 'test Admin' },
    { schoolName: 'test school', admin: 'test Admin' },
    { schoolName: 'test school', admin: 'test Admin' },
  ];
  return (
    <div>
      <TextField
        variant="outlined"
        placeholder="Search for school name...."
        style={{ width: '100%', marginBottom: '15px' }}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Divider />
      <div style={{ overflow: 'auto', height: '70vh' }}>
        <List style={{ overflow: 'auto' }}>
          {list.map((item) => (
            <div>
              <ListItem>
                <ListItemText primary={item.schoolName} />
                <ListItemSecondaryAction>
                  <IconButton edge="end">
                    <ChevronRightIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
    </div>
  );
};
export default AdminList;
