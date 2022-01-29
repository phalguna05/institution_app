/* eslint-disable react/function-component-definition */
import { makeStyles } from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import HomeIcon from '@material-ui/icons/Home';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import Topbar from '../../components/TopBar';
import Home from './Home';
import AdminForm from './ManageAdmin/index';

const useStyles = makeStyles({
  contentShift: {
    marginLeft: '230px',
    marginTop: '100px',
  },
  content: {
    marginTop: '100px',
    marginLeft: '70px',
  },
});
function SuperAdminDashboard() {
  const superAdmin = useSelector((state) => state.topBar);
  const classes = useStyles();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const checkIfOpen = (bool) => {
    setIsSidebarOpen(bool);
  };
  const iconList = [<HomeIcon />, <GroupAddIcon />];
  const sidebarList = ['Home', 'Manage Admins'];
  const switchDisplay = useCallback(() => {
    switch (superAdmin.activeIndex) {
      case 0:
        return <Home />;
      case 1:
        return <AdminForm />;

      default:
        return <Home />;
    }
  }, [superAdmin.activeIndex]);
  return (
    <div>
      <Topbar
        checkIfOpen={checkIfOpen}
        sidebarList={sidebarList}
        iconList={iconList}
      />
      <div className={isSidebarOpen ? classes.contentShift : classes.content}>
        {switchDisplay()}
      </div>
    </div>
  );
}
export default SuperAdminDashboard;
