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
          My goal is to become a junior developer and web designer who can create dynamic webpages that are responsive and interactive. I also enjoy styling and designing user interfaces. I am open to job opportunities as well as relocating to launch my coding career. Contact me if you'd like to know more!
        </div>
        <div>
          Email: Lpham2525@gmail.com
          <br />
          GitHub: https://github.com/lpham2525
          <br />
          LinkedIn: https://www.linkedin.com/in/lanchi-pham/
          <br />
          Portfolio: https://lpham2525.github.io/portfolio/
        </div>
      </Container>
    </>
  )
}

export default Bio
