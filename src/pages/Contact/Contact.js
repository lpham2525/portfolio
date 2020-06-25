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
        <p>
          <div className='form-group'>
            <label htmlFor='Name' />
            <TextField
              required
              id="filled-required"
              label="Required"
              placeholder="Name"
              variant="outlined"
              className="white"
            />
          </div>
        </p>
        <p>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1' />
            <TextField
              required
              id="filled-required"
              label="Required"
              placeholder="Email"
              variant="outlined"
              className="white"
            />
            <small id='emailHelp' className='form-text text-muted' />
          </div>
        </p>
        <p>
          <div className='form-group'>
            <label htmlFor='subject' />
            <TextField
              id="outlined-helperText"
              placeholder="Subject"
              variant="outlined"
              className="white"
            />
            <small className='form-text text-muted' />
          </div>
        </p>
        <div className='form-group'>
          <label htmlFor='Message' />
          <textarea cols="80" rows="15" placeholder='Please type message here.' />
        </div>
        <p>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
          >
          Send
          </Button>
        </p>
      </form>
    </>
  )
}

export default Contact
