import React from 'react'
import './Bio.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import pic from './pic.jpg'

const Bio = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='sm'>
        <div>
          <img src={pic} alt='profile' className='pic' />
          <br />
          <h2>Email: Lpham2525@gmail.com</h2>
        </div>
        <div className='bio'>
          My goal is to become a junior developer and web designer who can create dynamic webpages that are responsive and interactive. I like styling and I want to learn Python after I finish the coding bootcamp. Last, I am willing to relocate to start my career. Contact me if you'd like to know more!
        </div>
      </Container>
    </>
  )
}

export default Bio
