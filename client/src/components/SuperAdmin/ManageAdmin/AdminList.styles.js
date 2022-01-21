import { makeStyles } from '@material-ui/core';
import ChevronRight from '@material-ui/icons/ChevronRight';
import KeyBoardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import styled from 'styled-components';

const adminListStyles = makeStyles({
  adminListContainer: {
    '@media(max-width:780px)': {
      width: '100%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  adminList: {
    '@media(max-width:780px)': {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
    },
  },
});
const RightIcon=styled(ChevronRight)`
display: block;
  @media (max-width: 780px) {
    display: none;
  }

`
const DownIcon = styled(KeyBoardArrowDown)`
  display: none;
  @media (max-width: 780px) {
    display: block;
  }
`;
export { adminListStyles, DownIcon, RightIcon };

