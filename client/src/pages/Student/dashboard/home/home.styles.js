import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

const homeStyles = makeStyles({
  testsButton: {
    '& .MuiButton-label': {
      textTransform: 'none',
      textDecoration: 'underline',
      color: '#5e04ff',
    },
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flex: '1',
    flexDirection: 'row-reverse',
  },
  classJoin: {
    backgroundColor: 'blueviolet',
    alignSelf: 'flex-end',
    color: 'white',
    padding: '15px 20px',
    borderRadius: '5px',
  },
});

const OuterContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding-bottom: 30px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;
const LeftTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;
const TestsContainer = styled.div`
  padding: 0px 15px 15px 15px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  border-radius: 8px;
  @media (max-width: 450px) : {
    width: '90%';
  }
  height: 100%;
  flex: 1;
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 1.5rem;
  }
  .testDetails {
    p {
      font-size: 20px;
      padding: 0px;
      margin: 0px;
    }
    background-color: #bf85df;
    border-radius: 8px;
    padding: 15px 15px 15px 15px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
  .testtime {
    h2 {
      padding: 0px;
      margin: 0px;
    }
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .attendancePercentage {
    h2 {
      font-weight: 1000;
    }
  }
`;
const ChartContainer = styled.div`
  margin-top: 30px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  border-radius: 8px;
  @media (max-width: 450px) : {
    width: '90%';
  }
  height: calc(100% - 30px);
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  .performanceTable {
    td:nth-child(odd) {
      width: 200px;
    }
  }
`;
const LeftBottomContainer = styled.div`
  flex: 2;
`;
const RightContainer = styled.div`
  padding: 0px 15px 15px 15px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  border-radius: 8px;
  flex: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* text-overflow: scroll; */
  overflow-y: auto;
  .subjectContainer {
    display: flex;
    flex-direction: row;
    margin: 20px;
    border: 2px solid lightgray;
    border-radius: 8px;
    justify-content: space-around;
  }
  .classDetails {
    padding-bottom: 20px;
  }
  .classTime {
    display: flex;
    text-align: center;
    flex-direction: row;
    align-items: center;
  }
`;
export {
  LeftContainer,
  LeftTopContainer,
  TestsContainer,
  RightContainer,
  OuterContainer,
  LeftBottomContainer,
  ChartContainer,
  homeStyles,
};
