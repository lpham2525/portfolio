import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

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
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to='/' color='inherit'>
            Homepage
          </Link>
          <Link to='/Portfolio' color='inherit'>
            Portfolio
          </Link>
          <Link to='/Contact' color='inherit'>
            Contact
          </Link>
          <Link to="/" color='inherit' className={classes.link}>
            Homepage
          </Link>
          <Link to="./Portfolio" color="inherit" className={classes.link}>
            Portfolio
          </Link>
          <Link to='./Contact' color='inherit' className={classes.link}>
            Contact
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
