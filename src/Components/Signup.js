
import React from 'react';
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

    const useStyles = makeStyles(theme => ({
        '@global': {
          body: {
            backgroundColor: theme.palette.common.white,
          },
        },
        paper: {
          marginTop: theme.spacing(20),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', 
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
      }));

     const Signin=props=> {
         let input
        const classes = useStyles();
            return(           
<Container component="main" maxWidth="xs">
<CssBaseline />
<div className={classes.paper}>
  <Avatar className={classes.avatar}>
    <LockOutlinedIcon />
  </Avatar>
  <Typography component="h1" variant="h5">
    Sign in
  </Typography>
  <form className={classes.form}  onSubmit={(e)=>{{props.handleSubmit(e,input)}}}>
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="email"
      label="Enter username"
      name="username"
      
      autoFocus
      inputRef={node => {
        input = node;
      }}
    />
    <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
    />
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}  
    >
      Sign In
    </Button>
  </form>
</div>
</Container>
);
}
    Signin.propTypes={
        handleSubmit:PropTypes.func.isRequired
    }
    export default Signin;
