import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import Assignments from './assignments';
import Attendance from './attendance';
import { MainContainer } from './dashboard.styles';
import Home from './home';
import MarksSheet from './marksSheet';
import StudyMaterial from './studyMaterial';
import { dashBoard } from './utils/constants';

function DashBoard({ isSideBarOpen }) {
  const dashBoardState = useSelector((state) => state.topBar.activeIndex);

  const getChildren = useCallback(() => {
    switch (dashBoardState) {
      case dashBoard.Home:
        return <Home />;
      case dashBoard.Tests:
        return <Assignments />;
      case dashBoard.StudyMaterial:
        return <StudyMaterial />;
      case dashBoard.Attendance:
        return <Attendance />;
      case dashBoard.MarksSheet:
        return <MarksSheet />;
      default:
        return <Home />;
    }
  }, [dashBoardState]);
  return (
    <MainContainer isSideBarOpen={isSideBarOpen}>{getChildren()}</MainContainer>
  );
}
export default DashBoard;
