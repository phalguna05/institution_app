import AssessmentIcon from '@material-ui/icons/Assessment';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Face from '@material-ui/icons/Face';
import HomeIcon from '@material-ui/icons/Home';
import MenuBook from '@material-ui/icons/MenuBook';
import React, { useState } from 'react';
import TopBar from '../../components/TopBar';
import DashBoard from './dashboard';
import { sidebarList } from './dashboard/utils/constants';

function Student() {
  const iconList = [
    <HomeIcon />,
    <AssignmentIcon />,
    <AssessmentIcon />,
    <MenuBook />,
    <Face />,
  ];

  const [isSideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <TopBar
        checkIfOpen={setSideBarOpen}
        iconList={iconList}
        sidebarList={sidebarList}
        component="Student"
      />
      <DashBoard isSideBarOpen={isSideBarOpen} />
    </>
  );
}
export default Student;
