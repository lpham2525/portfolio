import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > * + *': {
      marginLeft: theme.spacing(2)
    },
    menuButton: {
      marginRight: theme.spacing(2)
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
  const preventDefault = (event) => event.preventDefault()
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link href="../../pages/Homepage" onClick={preventDefault} color='inherit'>
            Homepage
          </Link>
          <Link href="../../pages/Portfolio" onClick={preventDefault} color="inherit" className={classes.link}>
            Portfolio
          </Link>
          <Link href="../../pages/Contact" onClick={preventDefault} color='inherit'>
            Contact
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
