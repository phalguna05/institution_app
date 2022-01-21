import { makeStyles } from '@material-ui/core';

const divStyles = makeStyles({
  imageContainer: {
    width: '50vw',
    marginTop: '5%',
    marginRight: '14%',
    '@media (max-width: 780px)': {
      flex: '1',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  loginImage: {
    '@media (max-width: 780px)': {
      maxWidth: '300px',
      maxHeight: '300px',
    },
  },
  rightContainer: {
    width: '28vw',
    marginTop: '7%',
    '@media (max-width: 780px)': {
      width: '100%',
    },
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '12vh 3vw 16vh 3vw',
    minHeight: '270px',
    justifyContent: 'space-between',
    textAlign: 'center',
    backgroundColor: 'white',
    boxShadow:
      ' 0 5px 10px rgba(154, 160, 185, 0.05),0 15px 40px rgba(166, 173, 201, 0.2)',
    borderRadius: '8px',
    '@media (max-width: 780px)': {
      margin: '0px auto',
      maxWidth: '70vw',
    },
  },
  errorContainer: {
    // opacity: '0.4',
    backgroundColor: '#ffa3a3',
    height: '30px',
    border: '2px solid red',
    borderRadius: '4px',
    color: 'red',
  },
  loginContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    '@media (max-width: 780px)': {
      flexDirection: 'column',
    },
  },
});
export { divStyles };
