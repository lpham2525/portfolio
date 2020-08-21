import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import './Navbar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const Navbar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className='toolbar'>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" color='inherit' className={classes.link} className='links'>
              Homepage
            </Link>
            <Link to="/Portfolio" color="inherit" className={classes.link} className='links'>
              Portfolio
            </Link>
            <Link to='/Contact' color='inherit' className={classes.link} className='links'>
              Contact
            </Link>
          </Typography>
          <a href='https://www.linkedin.com/in/lanchi-pham/' target='_blank' rel='noopener noreferrer' id='linkedIn'>
            <i className='fab fa-linkedin links' />
          </a>

          <a href='https://github.com/lpham2525' target='_blank' id='git' rel='noopener noreferrer'>
            <i className='fab fa-github links' />
          </a>

          <a href='mailto:lpham2525@gmail.com? subject=subject text ' target='_blank' rel='noopener noreferrer' id='email-link'>
            <i className='fas fa-envelope-square links' />
          </a>

          <a href='https://docs.google.com/document/d/1_eTe9DgBEbg6MghlNdJ14XX2KabCraCMirG6O505fH8/edit?usp=sharing' target='_blank' rel='noopener noreferrer' id='resume'>
            <i className='far fa-file-alt links' />
          </a>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
