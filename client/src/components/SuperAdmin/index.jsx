/* eslint-disable react/function-component-definition */
import { makeStyles } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import AdminForm from './ManageAdmin/index';
import Topbar from './TopBar';

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
const SuperAdminDashboard = () => {
  const superAdmin = useSelector((state) => state.superAdmin);
  const classes = useStyles();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const checkIfOpen = (bool) => {
    setIsSidebarOpen(bool);
  };
  const switchDisplay = useCallback(() => {
    switch (superAdmin.dashboardDisplay) {
      case 'home':
        return 'nothing to show';
      case 'adminsDisplay':
        return <AdminForm />;

      default:
        return 'nothing to show';
    }
  }, [superAdmin.dashboardDisplay]);
  return (
    <div>
      <Topbar checkIfOpen={checkIfOpen} />
      <div className={isSidebarOpen ? classes.contentShift : classes.content}>
        {switchDisplay()}
      </div>
    </div>
  );
};
export default SuperAdminDashboard;
