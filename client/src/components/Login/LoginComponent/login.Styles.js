import { makeStyles } from '@material-ui/core';

const divStyles = makeStyles({
  mainContainer: {
    margin: 'auto',
    maxWidth: '500px',
    marginTop: '150px',
    padding: '10px',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',
    minHeight: '270px',
    justifyContent: 'space-between',
    textAlign: 'center',
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
  },
});

export { divStyles };
