import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import './Navbar.css'
import github from './images/github.png'
import linked from './images/linked.png'
import resume from './images/resume.jpg'
import gmail from './images/gmail.jpg'
import phone from './images/phone.jpg'

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

          {/* Icons */}

          <a href='https://www.linkedin.com/in/lanchi-pham/' target="_blank" id="linkedIn">
            <i className='fab fa-linkedin' style='font-size:36px' />
          </a>

          <a href='https://github.com/lpham2525' target='_blank' id='git' rel='noopener noreferrer'>
            <i className='fab fa-github' style='font-size:25px' />
          </a>

          <a href='mailto:lpham2525@gmail.com? subject=subject text ' target="_blank" id="email-link">
            <i className="fas fa-envelope-square" style='font-size:20px'/>
          </a>

          <a href='https://docs.google.com/document/d/1_eTe9DgBEbg6MghlNdJ14XX2KabCraCMirG6O505fH8/edit?usp=sharing' target='_blank' id="resume">
            <i className="far fa-file-alt" style='font-size:30px' />
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
