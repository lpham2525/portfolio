import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import './Navbar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > * + *': {
      marginLeft: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    link: {
      marginRight: theme.spacing(5)
    }
  }
})
)

const Navbar = () => {
  const classes = useStyles()
  return (
    <AppBar position='static'>
      <Toolbar className='nav'>
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
          <Link to='/reactPage' color='inherit' className={classes.link} className='links'>
            Reactfolio Project
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
