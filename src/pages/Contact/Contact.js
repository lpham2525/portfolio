import React from 'react'
import './Contact.css'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: 'theme.spacing(1)',
      width: '25ch'
    },
    button: {
      margin: theme.spacing(1)
    }
  }
}))

const Contact = () => {
  const classes = useStyles()
  return (
    <>
      <h1 id='contactHeader'>I'd love to hear from you!</h1>
      <p className='paragraph'>Fill out the following form if you would like to send me a message. Thank you! </p>
      <form>
        <div className='form-group'>
          <label htmlFor='Name' />
          <TextField
            required
            id="filled-required"
            label="Required"
            placeholder="Name"
            variant="outlined"
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1' />
          <TextField
            required
            id="filled-required"
            label="Required"
            placeholder="Email"
            variant="outlined"
          />
          <small id='emailHelp' className='form-text text-muted' />
        </div>
        <div className='form-group'>
          <label htmlFor='subject' />
          <TextField
            id="outlined-helperText"
            placeholder="Subject"
            variant="outlined"
          />
          <small className='form-text text-muted' />
        </div>
        <div className='form-group'>
          <label htmlFor='Message' />
          <TextareaAutosize
            rowsMax={10}
            aria-label="maximum height"
            placeholder="Please type message here."
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
        >
         Send
        </Button>
      </form>
    </>
  )
}

export default Contact
