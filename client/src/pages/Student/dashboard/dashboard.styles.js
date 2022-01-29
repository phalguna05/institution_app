import styled from 'styled-components';

const MainContainer = styled.div`
  margin-top: 100px;

  height: 100%;
  margin-left: ${(props) => (props.isSideBarOpen ? '230px' : '70px')};
`;
export { MainContainer };
