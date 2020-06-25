import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
    fontSize: '20px'
  },
  appBar: {
    top: 'auto',
    padding: 20,
    bottom: 0,
    position: 'fixed'
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        &copy;Copyright 2020 LanChi Pham
      </AppBar>
    </>
  )
}

export default Footer
