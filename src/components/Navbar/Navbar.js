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
        </Typography>
        {/* Icons */}
        <div className='icon' style={{ float: 'right' }}>
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
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
