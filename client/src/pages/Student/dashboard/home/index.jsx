import { Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { setDashboardDisplay } from '../../../../components/TopBar/reducers/actions';
import { dashBoard } from '../utils/constants';
import { studentMarks, timeTable } from '../utils/mockData';
import {
  ChartContainer,
  homeStyles,
  LeftBottomContainer,
  LeftContainer,
  LeftTopContainer,
  OuterContainer,
  RightContainer,
  TestsContainer,
} from './home.styles';

function Home() {
  const dispatch = useDispatch();
  const styles = homeStyles();
  return (
    <OuterContainer>
      <LeftContainer>
        <LeftTopContainer>
          <TestsContainer>
            <h1>Upcoming Test</h1>
            <div className="testDetails">
              <p>Daily Maths Test</p>
              <div className="testtime">
                <h2>28th Jan 2022</h2>
                <h2>9:30 AM</h2>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <Button
                className={styles.testsButton}
                onClick={() => dispatch(setDashboardDisplay(dashBoard.Tests))}
              >
                View All Tests
              </Button>
            </div>
          </TestsContainer>
          <TestsContainer>
            <h1>Attendance</h1>
            <div className="attendancePercentage">
              <h2>75%</h2>
              <p>7 out 15 classes attended yesterday</p>
            </div>
            <div className={styles.buttonContainer}>
              <Button
                className={styles.testsButton}
                onClick={() =>
                  dispatch(setDashboardDisplay(dashBoard.Attendance))
                }
              >
                View Detailed Report
              </Button>
            </div>
          </TestsContainer>
        </LeftTopContainer>
        <LeftBottomContainer>
          <ResponsiveContainer>
            <ChartContainer>
              <div>
                <h2>Recent Performance Report</h2>
              </div>
              <div className="performanceTable">
                <table style={{ margin: '0 auto' }}>
                  <tr>
                    <td>Exam Name</td>
                    <td>:</td>
                    <td>Weekly Test</td>
                  </tr>
                  <tr>
                    <td>Date Conducted</td>
                    <td>:</td>
                    <td>24th Jan 2022</td>
                  </tr>
                  <tr>
                    <td>Grade Obtained</td>
                    <td>:</td>
                    <td>A+</td>
                  </tr>
                </table>
              </div>
              <BarChart width={700} height={250} data={studentMarks}>
                <XAxis dataKey="subjectName" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="marks" fill="#f7a901" />
              </BarChart>
              <div className={styles.buttonContainer}>
                <Button
                  className={styles.testsButton}
                  onClick={() =>
                    dispatch(setDashboardDisplay(dashBoard.MarksSheet))
                  }
                >
                  View Detailed Report
                </Button>
              </div>
            </ChartContainer>
          </ResponsiveContainer>
        </LeftBottomContainer>
      </LeftContainer>
      <RightContainer>
        <h1>Today&apos;s Schedule</h1>
        {timeTable.map((subject) => (
          <div className="subjectContainer">
            <div className="classTime">
              <h2>{subject.classTime}</h2>
            </div>
            <div className="classDetails">
              <h2>{subject.className}</h2>
              <Link className={styles.classJoin} href={subject.classLink}>
                Join
              </Link>
            </div>
          </div>
        ))}
      </RightContainer>
    </OuterContainer>
  );
}
export default Home;
