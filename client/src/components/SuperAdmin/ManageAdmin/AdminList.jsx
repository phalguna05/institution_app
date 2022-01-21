import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { adminListStyles, DownIcon, RightIcon } from './AdminList.styles';

function AdminList() {
  const [searchValue, setSearchValue] = useState('');
  const useStyles = adminListStyles();
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
    <div className={useStyles.adminListContainer}>
      <TextField
        variant="outlined"
        placeholder="Search for school name...."
        style={{ width: '100%', marginBottom: '15px' }}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Divider />
      <div style={{ overflow: 'auto', height: '70vh' }}>
        <List style={{ overflow: 'auto' }} className={useStyles.adminList}>
          {list.map((item) => (
            <div>
              <ListItem>
                <ListItemText primary={item.schoolName} />
                <ListItemSecondaryAction>
                  <IconButton edge="end">
                    <RightIcon />
                    <DownIcon />
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
}
export default AdminList;
